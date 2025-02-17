import React, { useEffect, useState } from "react";
import useMessageContext from "./useMessageContext";
import { getCurrentFormattedTime } from "./Child1";

const Child2 = () => {
  const [childMessage, setChildMessage] = useState("");
  const { messages, setMessages } = useMessageContext();
  const userName= "User 2"

  let addToHistory = () => {
    if (childMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: childMessage, name: userName, time : getCurrentFormattedTime() },
      ]);
    }
    setChildMessage("");
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <>
      <div className="col-6">
        <div className="p-3">
          <div className="input-group mb-3">
            <span class="input-group-text">{userName}</span>
            <input
              type="text"
              value={childMessage}
              className="form-control"
              placeholder="Type a message..."
              onChange={(event) => setChildMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  document.getElementById("button-addon2").click();
                }
              }}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={addToHistory}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Child2;
