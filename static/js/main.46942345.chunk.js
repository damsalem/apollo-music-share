(this["webpackJsonpapollo-music-share"]=this["webpackJsonpapollo-music-share"]||[]).push([[0],{177:function(e,t,n){"use strict";n.r(t);var a,i,r=n(241),c=n(242),o=n(0),s=n.n(o),l=n(19),u=n.n(l),d=n(15),j=n(234),b=n(237),p=n(247),h=n(71),O=n.n(h),g=n(93),m=n(21),x=n(27),f=n(243),v=n(212),y=n(249),S=n(215),w=n(216),N=n(244),C=n(217),I=n(218),k=n(219),_=n(220),q=n(221),P=n(75),E=n.n(P),T=n(114),A=n.n(T),F=n(115),G=n.n(F),D=n(41),Q=n(245),$=Object(Q.a)(a||(a=Object(D.a)(["\n  mutation addOrRemoveFromQueue($input: SongInput!) {\n    addOrRemoveFromQueue(input: $input) @client\n  }\n"]))),R=Object(Q.a)(i||(i=Object(D.a)(["\n  mutation addSong(\n    $title: String!\n    $artist: String!\n    $thumbnail: String!\n    $duration: Float!\n    $url: String!\n  ) {\n    insert_songs(\n      objects: {\n        title: $title\n        artist: $artist\n        thumbnail: $thumbnail\n        duration: $duration\n        url: $url\n      }\n    ) {\n      affected_rows\n    }\n  }\n"]))),J=n(5),L=Object(v.a)((function(e){return{container:{display:"flex",alignItems:"center"},urlInput:{margin:e.spacing(1)},addSongButton:{margin:e.spacing(1)},dialog:{textAlign:"center"},thumbnail:{width:"90%"}}})),M={duration:0,title:"",artist:"",thumbnail:""};var U=function(){var e=L(),t=Object(f.a)(R),n=Object(d.a)(t,2),a=n[0],i=n[1].error,r=s.a.useState(""),c=Object(d.a)(r,2),o=c[0],l=c[1],u=s.a.useState(!1),j=Object(d.a)(u,2),b=j[0],p=j[1],h=s.a.useState(!1),v=Object(d.a)(h,2),P=v[0],T=v[1],F=s.a.useState(M),D=Object(d.a)(F,2),Q=D[0],$=D[1];function U(e){var t=e.target,n=t.name,a=t.value;$((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},n,a))}))}function Y(){T(!1)}function z(){return(z=Object(g.a)(O.a.mark((function e(t){var n,a,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.player,!(a=n.player.player).getVideoData){e.next=6;break}i=B(a),e.next=10;break;case 6:if(!a.getCurrentSound){e.next=10;break}return e.next=9,W(a);case 9:i=e.sent;case 10:$(Object(x.a)(Object(x.a)({},i),{},{url:o}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){var t=e.getDuration(),n=e.getVideoData(),a=n.title,i=n.video_id;return{duration:t,title:a,artist:n.author,thumbnail:"https://img.youtube.com/vi/".concat(i,"/0.jpg")}}function W(e){return new Promise((function(t){e.getCurrentSound((function(e){e&&t({duration:Number(e.duration/1e3),title:e.title,artist:e.user.username,thumbnail:e.artwork_url.replace("-large","-t500x500")})}))}))}function V(){return(V=Object(g.a)(O.a.mark((function e(){var t,n,i,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Q.url,n=Q.duration,i=Q.title,r=Q.artist,c=Q.thumbnail,e.next=4,a({variables:{url:t.length>0?t:null,duration:n>0?n:null,title:i.length>0?i:null,artist:r.length>0?r:null,thumbnail:c.length>0?c:null}});case 4:Y(),$(M),l(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error adding song",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function Z(e){var t,n;return null===i||void 0===i||null===(t=i.networkError)||void 0===t||null===(n=t.extensions)||void 0===n?void 0:n.path.includes(e)}s.a.useEffect((function(){var e=A.a.canPlay(o)||G.a.canPlay(o);p(e)}),[o]);var H=Q.thumbnail,K=Q.title,X=Q.artist;return console.dir(i),Object(J.jsxs)("div",{className:e.container,children:[Object(J.jsxs)(y.a,{className:e.dialog,open:P,onClose:Y,children:[Object(J.jsx)(S.a,{children:"Edit Song"}),Object(J.jsxs)(w.a,{children:[Object(J.jsx)("img",{className:e.thumbnail,src:H,alt:"Song Thumbnail"}),Object(J.jsx)(N.a,{value:K,onChange:U,margin:"dense",name:"title",label:"Title",fullWidth:!0,error:Z("title"),helperText:Z("title")&&"Fill out field"}),Object(J.jsx)(N.a,{value:X,onChange:U,margin:"dense",name:"artist",label:"Artist",fullWidth:!0,error:Z("artist"),helperText:Z("artist")&&"Fill out field"}),Object(J.jsx)(N.a,{value:H,onChange:U,margin:"dense",name:"thumbnail",label:"Thumbnail",fullWidth:!0,error:Z("thumbnail"),helperText:Z("thumbnail")&&"Fill out field"})]}),Object(J.jsxs)(C.a,{children:[Object(J.jsx)(I.a,{onClick:Y,color:"secondary",children:"Cancel"}),Object(J.jsx)(I.a,{color:"primary",variant:"outlined",onClick:function(){return V.apply(this,arguments)},children:"Add Song"})]})]}),Object(J.jsx)(N.a,{className:e.urlInput,onChange:function(e){return l(e.target.value)},value:o,placeholder:"Add YouTube or SoundCloud URL",fullWidth:!0,margin:"normal",variant:"outlined",type:"url",InputProps:{startAdornment:Object(J.jsx)(k.a,{position:"start",children:Object(J.jsx)(_.a,{})})}}),Object(J.jsx)(I.a,{disabled:!b,className:e.addSongButton,onClick:function(){return T(!0)},variant:"contained",color:"primary",endIcon:Object(J.jsx)(q.a,{}),children:"Add"}),Object(J.jsx)(E.a,{url:o,hidden:!0,onReady:function(e){return z.apply(this,arguments)}})]})},Y=n(222),z=n(223),B=n(127),W=n(119),V=n.n(W),Z=Object(v.a)((function(e){return{title:{marginLeft:e.spacing(1)}}}));var H,K=function(){var e=Z();return Object(J.jsx)(Y.a,{color:"primary",position:"fixed",children:Object(J.jsxs)(z.a,{children:[Object(J.jsx)(V.a,{}),Object(J.jsx)(B.a,{className:e.title,variant:"h6",component:"h1",children:"Apollo Music Share"})]})})},X=n(252),ee=n(224),te=n(225),ne=n(226),ae=n(227),ie=n(228),re=n(229),ce=n(230),oe=n(231),se=n(232),le=Object(Q.a)(H||(H=Object(D.a)(["\n  subscription getSongs {\n    songs(order_by: { created_at: desc }) {\n      url\n      title\n      thumbnail\n      id\n      duration\n      artist\n    }\n  }\n"])));var ue=Object(v.a)((function(e){return{container:{margin:e.spacing(3)},songInfoContainer:{display:"flex",alignItmes:"center"},songInfo:{width:"100%",display:"flex",justifyContent:"space-between"},thumbnail:{objectFit:"cover",width:140,height:140}}}));function de(e){var t=e.song,n=t.id,a=ue(),i=Object(f.a)($,{onCompleted:function(e){localStorage.setItem("queue",JSON.stringify(e.addOrRemoveFromQueue))}}),r=Object(d.a)(i,1)[0],c=s.a.useContext(Ie),o=c.state,l=c.dispatch,u=s.a.useState(!1),j=Object(d.a)(u,2),b=j[0],p=j[1],h=t.title,O=t.artist,g=t.thumbnail;return s.a.useEffect((function(){var e=o.isPlaying&&n===o.song.id;p(e)}),[n,o.song.id,o.isPlaying]),Object(J.jsx)(te.a,{className:a.container,children:Object(J.jsxs)("div",{className:a.songInfoContainer,children:[Object(J.jsx)(ne.a,{className:a.thumbnail,image:g}),Object(J.jsxs)("div",{className:a.songInfo,children:[Object(J.jsxs)(ae.a,{children:[Object(J.jsx)(B.a,{gutterbottom:"true",variant:"h5",component:"h2",children:h}),Object(J.jsx)(B.a,{variant:"body1",component:"p",color:"textSecondary",children:O})]}),Object(J.jsxs)(ie.a,{children:[Object(J.jsx)(re.a,{size:"small",color:"primary",onClick:function(){l({type:"SET_SONG",payload:{song:t}}),l(o.isPlaying?{type:"PAUSE_SONG"}:{type:"PLAY_SONG"})},children:b?Object(J.jsx)(ce.a,{}):Object(J.jsx)(oe.a,{})}),Object(J.jsx)(re.a,{size:"small",color:"secondary",onClick:function(){r({variables:{input:Object(x.a)(Object(x.a)({},t),{},{__typename:"Song"})}})},children:Object(J.jsx)(se.a,{})})]})]})]})})}var je=function(){var e=Object(X.a)(le),t=e.data,n=e.loading,a=e.error;return n?Object(J.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:50},children:Object(J.jsx)(ee.a,{})}):a?(console.dir(a),Object(J.jsx)("div",{children:"Error fetching songs"})):Object(J.jsx)("div",{children:Object(J.jsx)("h2",{children:t.songs.map((function(e){return Object(J.jsx)(de,{song:e},e.id)}))})})},be=n(251),pe=n(235),he=n(236),Oe=n(250),ge=n(233),me=Object(v.a)({container:{display:"grid",gridAutoFlow:"column",gridTemplateColumns:"50px auto 50px",gridGap:12,alignItems:"center",marginTop:10},avatar:{width:44,height:44},songInfoContainer:{overflow:"hidden",whiteSpace:"nowrap"},text:{textOverflow:"ellipsis",overflow:"hidden"}});function xe(e){var t=e.song,n=me(),a=Object(f.a)($,{onCompleted:function(e){localStorage.setItem("queue",JSON.stringify(e.addOrRemoveFromQueue))}}),i=Object(d.a)(a,1)[0],r=t.thumbnail,c=t.artist,o=t.title;return Object(J.jsxs)("div",{className:n.container,children:[Object(J.jsx)(Oe.a,{className:n.avatar,src:r,alt:"Song Thumbnail"}),Object(J.jsxs)("div",{className:n.songInfoContainer,children:[Object(J.jsx)(B.a,{className:n.text,variant:"subtitle2",children:o}),Object(J.jsx)(B.a,{className:n.text,variant:"body2",color:"textSecondary",children:c})]}),Object(J.jsx)(re.a,{onClick:function(){i({variables:{input:Object(x.a)(Object(x.a)({},t),{},{__typename:"Song"})}})},children:Object(J.jsx)(ge.a,{color:"error"})})]})}var fe,ve=function(e){var t=e.queue;return Object(j.a)((function(e){return e.breakpoints.up("md")}))&&Object(J.jsxs)("div",{style:{margin:"10px 0"},children:[Object(J.jsxs)(B.a,{color:"textSecondary",variant:"button",children:["Queue (",t.length,")"]}),t.map((function(e,t){return Object(J.jsx)(xe,{song:e},t)}))]})},ye=Object(Q.a)(fe||(fe=Object(D.a)(["\n  query GET_QUEUED_SONGS {\n    queue @client {\n      id\n      duration\n      title\n      artist\n      thumbnail\n      url\n    }\n  }\n"]))),Se=n(248),we=Object(v.a)((function(e){return{container:{display:"flex",justifyContent:"space-between"},details:{display:"flex",flexDirection:"column",padding:"0px 15px"},content:{flex:"1 0 auto"},thumbnail:{width:150},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},playIcon:{height:38,width:38}}}));var Ne=function(){var e,t=Object(Se.a)(ye).data,n=s.a.useRef(),a=s.a.useContext(Ie),i=a.state,r=a.dispatch,c=s.a.useState(0),o=Object(d.a)(c,2),l=o[0],u=o[1],j=s.a.useState(0),b=Object(d.a)(j,2),p=b[0],h=b[1],O=s.a.useState(!1),g=Object(d.a)(O,2),m=g[0],x=g[1],f=s.a.useState(0),v=Object(d.a)(f,2),y=v[0],S=v[1],w=we();return s.a.useEffect((function(){var e=t.queue.findIndex((function(e){return e.id===i.song.id}));S(e)}),[t.queue,i.song.id]),s.a.useEffect((function(){var e=t.queue[y+1];l>=.99&&e&&(u(0),r({type:"SET_SONG",payload:{song:e}}))}),[t.queue,y,l,r]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(te.a,{variant:"outlined",className:w.container,children:[Object(J.jsxs)("div",{className:w.details,children:[Object(J.jsxs)(ae.a,{className:w.content,children:[Object(J.jsx)(B.a,{variant:"h5",component:"h3",children:i.song.title}),Object(J.jsx)(B.a,{variant:"subtitle1",component:"p",color:"textSecondary",children:i.song.artist})]}),Object(J.jsxs)("div",{className:w.controls,children:[Object(J.jsx)(re.a,{onClick:function(){var e=t.queue[y-1];e&&r({type:"SET_SONG",payload:{song:e}})},children:Object(J.jsx)(pe.a,{})}),Object(J.jsx)(re.a,{onClick:function(){r(i.isPlaying?{type:"PAUSE_SONG"}:{type:"PLAY_SONG"})},children:i.isPlaying?Object(J.jsx)(ce.a,{className:w.playIcon}):Object(J.jsx)(oe.a,{className:w.playIcon})}),Object(J.jsx)(re.a,{onClick:function(){var e=t.queue[y+1];e&&r({type:"SET_SONG",payload:{song:e}})},children:Object(J.jsx)(he.a,{})}),Object(J.jsx)(B.a,{variant:"subtitle1",component:"p",color:"textSecondary",children:(e=p,new Date(1e3*e).toISOString().substr(11,8))})]}),Object(J.jsx)(be.a,{onMouseDown:function(){x(!0)},onMouseUp:function(){x(!1),n.current.seekTo(l)},onChange:function(e,t){u(t)},value:l,type:"range",min:0,max:1,step:.01})]}),Object(J.jsx)(E.a,{ref:n,onProgress:function(e){var t=e.played,n=e.playedSeconds;m||(u(t),h(n))},url:i.song.url,playing:i.isPlaying,hidden:!0}),Object(J.jsx)(ne.a,{className:w.thumbnail,image:i.song.thumbnail})]}),Object(J.jsx)(ve,{queue:t.queue})]})};var Ce=function(e,t){switch(t.type){case"SET_SONG":return Object(x.a)(Object(x.a)({},e),{},{song:t.payload.song});case"PLAY_SONG":return Object(x.a)(Object(x.a)({},e),{},{isPlaying:!0});case"PAUSE_SONG":return Object(x.a)(Object(x.a)({},e),{},{isPlaying:!1});default:return e}},Ie=s.a.createContext({song:{id:"a49b4840-59e6-45c4-98b7-671873988b80",title:"Superposition",artist:"Young the Giant",thumbnail:"https://img.youtube.com/vi/QxJhrwyn0M4/0.jpg",url:"https://www.youtube.com/watch?v=QxJhrwyn0M4",duration:232},isPlaying:!1});var ke,_e=function(){var e=s.a.useContext(Ie),t=s.a.useReducer(Ce,e),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(j.a)((function(e){return e.breakpoints.up("sm")})),c=Object(j.a)((function(e){return e.breakpoints.up("md")}));return Object(J.jsx)(Ie.Provider,{value:{state:a,dispatch:i},children:Object(J.jsxs)(b.a,{container:!0,spacing:3,children:[Object(J.jsxs)(b.a,{style:{paddingTop:r?"80px":"10px"},item:!0,xs:12,md:7,children:[Object(J.jsx)(p.a,{only:"xs",children:Object(J.jsx)(K,{})}),Object(J.jsx)(U,{}),Object(J.jsx)(je,{})]}),Object(J.jsx)(b.a,{style:c?{position:"fixed",width:"100%",right:0,top:"65px"}:{position:"fixed",width:"100%",bottom:0},item:!0,xs:12,md:5,children:Object(J.jsx)(Ne,{})})]})})},qe=n(240),Pe=n(122),Ee=n(238),Te=n(239),Ae=Object(Pe.a)({palette:{type:"dark",primary:Ee.a,secondary:Te.a}}),Fe=n(34),Ge=n(124),De=n(121),Qe=n(123),$e=new Ge.a({link:new De.a({uri:"wss://apollo-tunes-share.hasura.app/v1/graphql",options:{reconnect:!0,connectionParams:{headers:{"x-hasura-admin-secret":"6Aaz3fUJMDTtHZZe0LzSZLlhN1MJ5e2UVXh4bed12mbuKvD966325mv9kLihDumI"}}}}),cache:new Qe.a,typeDefs:Object(Q.a)(ke||(ke=Object(D.a)(["\n    type Song {\n      id: uuid!\n      title: String!\n      artist: String!\n      thumbnail: String!\n      duration: Float!\n      url: String!\n    }\n    input SongInput {\n      id: uuid!\n      title: String!\n      artist: String!\n      thumbnail: String!\n      duration: Float!\n      url: String!\n    }\n    type Query {\n      queue: [Song]!\n    }\n    type Mutation {\n      addOrRemoveFromQueue(input: SongInput!): [Song]!\n    }\n  "]))),resolvers:{Mutation:{addOrRemoveFromQueue:function(e,t,n){var a=t.input,i=n.cache,r=i.readQuery({query:ye});if(r){var c=r.queue,o=c.some((function(e){return e.id===a.id}))?c.filter((function(e){return e.id!==a.id})):[].concat(Object(Fe.a)(c),[a]);return i.writeQuery({query:ye,data:{queue:o}}),o}return[]}}}}),Re={queue:Boolean(localStorage.getItem("queue"))?JSON.parse(localStorage.getItem("queue")):[]};$e.writeData({data:Re});var Je=$e;u.a.render(Object(J.jsx)(qe.a,{client:Je,children:Object(J.jsxs)(r.a,{theme:Ae,children:[Object(J.jsx)(c.a,{}),Object(J.jsx)(_e,{})]})}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.46942345.chunk.js.map