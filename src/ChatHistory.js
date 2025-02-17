import React from "react";
import useMessageContext from "./useMessageContext";

const ChatHistory = () => {
  const { messages } = useMessageContext();

  return (
    <div className="col-12">
      <div className=" container p-3">
        {messages.map((msg, index) =>
          msg.name === "User 1" ? (
            <p className="left" style={{ width: "600px"}} key={index}>
              {msg.text + " "}
              <label style={{ fontSize: "7px" }}>{msg.time}</label>
            </p>
          ) : (
            <p className="right" style={{ width: "600px" }} key={index}>
              {msg.text + " "}
              <label style={{ fontSize: "7px" }}>{msg.time}</label>
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default ChatHistory;
