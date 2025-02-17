import { useContext } from "react";
import { MessageContext } from "./Child1";

const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("Component must be wrapped within a MessageContextProvider");
  }
  return context; // ✅ Return 'context' instead of 'message'
};

export default useMessageContext;
