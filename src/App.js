import { Grid, Hidden, useMediaQuery } from "@material-ui/core";
import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import songReducer from "./reducer";

export const SongContext = React.createContext({
  song: {
    id: "a49b4840-59e6-45c4-98b7-671873988b80",
    title: "Superposition",
    artist: "Young the Giant",
    thumbnail: "https://img.youtube.com/vi/QxJhrwyn0M4/0.jpg",
    url: "https://www.youtube.com/watch?v=QxJhrwyn0M4",
    duration: 232,
  },
  isPlaying: false,
});

function App() {
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(songReducer, initialSongState);
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Grid container spacing={3}>
        <Grid
          style={{
            paddingTop: greaterThanSm ? "80px" : "10px",
          }}
          item
          xs={12}
          md={7}
        >
          <Hidden only="xs">
            <Header />
          </Hidden>
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? {
                  position: "fixed",
                  width: "100%",
                  right: 0,
                  top: "65px",
                }
              : {
                  position: "fixed",
                  width: "100%",
                  bottom: 0,
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
