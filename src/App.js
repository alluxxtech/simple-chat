import React from "react";
import axios from "axios";
import socket from "./socket";

import JoinBlock from "./components/JoinBlock";
import Chat from "./components/Chat";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const setUsers = (users) => {
    dispatch({ type: "SET_USERS", payload: users });
  };

  const addMessage = (message) => {
    dispatch({ type: "NEW_MESSAGE", payload: message });
  };

  const onLogin = async (obj) => {
    console.log("login obj", obj);
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
    const { data } = await axios.get(`/rooms/${obj.roomId}`);
    dispatch({ type: "SET_DATA", payload: data });
    // setUsers(data.users);
  };

  React.useEffect(() => {
    socket.on("ROOM:SET_USERS", setUsers);
    socket.on("ROOM:NEW_MESSAGE", addMessage);
  }, []);

  window.socket = socket;

  return (
    <div className="wrapper">
      {!state.joined ? (
        <JoinBlock onLogin={onLogin} />
      ) : (
        <Chat {...state} onAddMessage={addMessage} />
      )}
      {/* <button onClick={connectSocket}>Connect</button> */}
    </div>
  );
}

export default App;
