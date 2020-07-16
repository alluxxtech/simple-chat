import React from "react";
import socket from "../socket";

export default function Chat({ users, messages, userName, roomId, onAddMessage }) {
  const [messageValue, setMessageValue] = React.useState("");

  const messagesRef = React.useRef(null);

  const onSendMessage = () => {
    socket.emit("ROOM:NEW_MESSAGE", {
      roomId,
      userName,
      text: messageValue,
    });
    onAddMessage({
      userName,
      text: messageValue,
    });
    setMessageValue("");
  };

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className="chat-wrapper">
      <div className="chat-wrapper__window">
        <div className="chat-wrapper__userList">
          <div className="chat-wrapper__userList-title">
            <div>
              Room: <b>{roomId}</b>
            </div>
            <hr />
            Online ({users.length}):
          </div>
          <div className="chat-wrapper__userList-list">
            <ul>
              {users.map((name, idx) => {
                return <li key={name + idx}>{name}</li>;
              })}
            </ul>
            {/* <span className="chat-wrapper__user">test user1</span>
            <span className="chat-wrapper__user">test user2</span>
            <span className="chat-wrapper__user">test user3</span> */}
          </div>
        </div>
        <div className="chat-wrapper__messages-block">
          <div ref={messagesRef} className="chat-wrapper__messages-field messages-field">
            {messages.map((message, idx) => (
              <div key={idx} className="messages-field__element">
                <div className="messages-field__message">{message.text}</div>
                <div className="messages-field__username">
                  <span>{message.userName}</span>
                </div>
              </div>
            ))}

            {/* <div className="messages-field__element">
              <div className="messages-field__message">message2</div>
              <div className="messages-field__username">
                <span>user2</span>
              </div>
            </div>
            <div className="messages-field__element">
              
              <div className="messages-field__message">message3</div>
              <div className="messages-field__username">
                <span>user3</span>
              </div>
            </div> */}
          </div>
          <div className="chat-wrapper__message-input">
            <textarea
              rows="3"
              cols="auto"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            />
            <button onClick={onSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
