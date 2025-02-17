import React, { createContext, useEffect, useState } from "react";
import "./Child1.css";
import Child2 from "./Child2";
import ChatHistory from "./ChatHistory";

const MessageContext = createContext();

const getCurrentFormattedTime = () => {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

const Child1 = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const userName = "User 1";

  let addToHistory = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, name: userName, time: getCurrentFormattedTime() },
      ]);
      setMessage("");
    }
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      <div className="container text-center bg-primary">
        <div className="row g-2">
          <ChatHistory />
          <div className="col-6">
            <div className="p-3">
              <div className="input-group mb-3">
                <span class="input-group-text">{userName}</span>
                <input
                  type="text"
                  value={message}
                  className="form-control"
                  placeholder="Type a message..."
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      document.getElementById("button-addon1").click();
                    }
                  }}
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  id="button-addon1"
                  onClick={addToHistory}
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
          <Child2 />
        </div>
      </div>
    </MessageContext.Provider>
  );
};

export default Child1;
export { MessageContext, getCurrentFormattedTime };
