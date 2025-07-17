"use client";

import React, { useState } from "react";
import ChatBot from "./ChatBot";

const FloatingChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          onClick={() => setOpen(true)}
          aria-label="Open Chatbot"
        >
          💬
        </button>
      )}

      {open && (
        <div
          className="fixed bottom-4 right-2  z-50 bg-white rounded-lg shadow-xl border w-[95vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col"
          style={{ maxHeight: "80vh" }}
        >
          <div className="flex justify-between items-center bg-blue-600 text-white p-2 md:p-3 rounded-t-lg">
            <span className="font-semibold text-sm md:text-base">
              Perficio Chatbot{" "}
            </span>

            <button
              className="text-white text-xl font-bold hover:text-gray-200 px-2"
              onClick={() => setOpen(false)}
              aria-label="Close Chatbot"
            >
              x
            </button>
          </div>

          <div className="flex-1 overflow-scroll py-2">
            <ChatBot />{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
