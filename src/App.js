import React from "react";
import JoinBlock from "./components/JoinBlock";
import socket from "./socket";

function App() {
  // const connectSocket = () => {
  //   io("http://localhost:9999");
  // };
  return (
    <div className="wrapper">
      <JoinBlock />
      {/* <button onClick={connectSocket}>Connect</button> */}
    </div>
  );
}

export default App;
