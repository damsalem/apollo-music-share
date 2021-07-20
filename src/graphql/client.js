import ApolloClient from "apollo-client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import { gql } from "apollo-boost";
import { GET_QUEUED_SONGS } from "./queries";
// import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://apollo-tunes-share.hasura.app/v1/graphql",
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          "x-hasura-admin-secret":
            "6Aaz3fUJMDTtHZZe0LzSZLlhN1MJ5e2UVXh4bed12mbuKvD966325mv9kLihDumI",
        },
      },
    },
  }),
  cache: new InMemoryCache(),
  typeDefs: gql`
    type Song {
      id: uuid!
      title: String!
      artist: String!
      thumbnail: String!
      duration: Float!
      url: String!
    }
    input SongInput {
      id: uuid!
      title: String!
      artist: String!
      thumbnail: String!
      duration: Float!
      url: String!
    }
    type Query {
      queue: [Song]!
    }
    type Mutation {
      addOrRemoveFromQueue(input: SongInput!): [Song]!
    }
  `,
  resolvers: {
    Mutation: {
      addOrRemoveFromQueue: (_, { input }, { cache }) => {
        const queryResult = cache.readQuery({
          query: GET_QUEUED_SONGS,
        });
        if (queryResult) {
          const { queue } = queryResult;
          const isInQueue = queue.some((song) => song.id === input.id);
          const newQueue = isInQueue
            ? queue.filter((song) => song.id !== input.id)
            : [...queue, input];
          cache.writeQuery({
            query: GET_QUEUED_SONGS,
            data: { queue: newQueue },
          });
          return newQueue;
        }
        return [];
      },
    },
  },
});

const hasQueue = Boolean(localStorage.getItem("queue"));

const data = {
  queue: hasQueue ? JSON.parse(localStorage.getItem("queue")) : [],
};
/* const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://apollo-tunes-share.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret":
          "6Aaz3fUJMDTtHZZe0LzSZLlhN1MJ5e2UVXh4bed12mbuKvD966325mv9kLihDumI",
      },
}); */
client.writeData({ data });

export default client;
