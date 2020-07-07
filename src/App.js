import React from "react";
import socket from "./socket";

import JoinBlock from "./components/JoinBlock";
import Chat from "./components/Chat";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
  };

  React.useEffect(() => {
    socket.on("ROOM:JOINED", (users) => {
      console.log("new user", users);
    });
  }, []);

  window.socket = socket;

  return (
    <div className="wrapper">
      {!state.joined ? <JoinBlock onLogin={onLogin} /> : <Chat />}
      {/* <button onClick={connectSocket}>Connect</button> */}
    </div>
  );
}

export default App;
