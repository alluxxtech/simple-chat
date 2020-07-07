import React from "react";

export default function Chat() {
  return (
    <div className="chat-wrapper">
      <div className="chat-wrapper__window">
        <div className="chat-wrapper__userList">
          <div className="chat-wrapper__userList-title">Users(2)</div>
          <div className="chat-wrapper__userList-list">
            <span className="chat-wrapper__user">test user1</span>
            <span className="chat-wrapper__user">test user2</span>
            <span className="chat-wrapper__user">test user3</span>
          </div>
        </div>
        <div className="chat-wrapper__messages-block">
          <div className="chat-wrapper__messages-field messages-field">
            <div className="messages-field__element">
              <div className="messages-field__message">message1</div>
              <div className="messages-field__username">user1</div>
            </div>
            <div className="messages-field__element">
              <div className="messages-field__message">message2</div>
              <div className="messages-field__username">user2</div>
            </div>
            <div className="messages-field__element">
              <div className="messages-field__message">message3</div>
              <div className="messages-field__username">user3</div>
            </div>
          </div>
          <div className="chat-wrapper__message-input">
            <textarea rows="5" cols="auto" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
