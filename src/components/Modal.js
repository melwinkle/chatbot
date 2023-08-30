import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "../ActionProvider";
import MessageParser from "../MessageParser";
import config from "../config";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal((current) => !current);
  };

  return (
    <div className="flex flex-col gap-2 ">
        {showModal ? (
        <div>
          {" "}
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            placeholderText='Student Input'
          />
        </div>
      ) : null}

      <div className="ml-auto">
      <button
        className="bg-blue-200 text-black 
        font-bold px-6 py-3 rounded  outline-none focus:outline-none"
        onClick={handleToggle}
      >
        Chat
      </button>

      </div>

      

      
    </div>
  );
};

export default Modal;
