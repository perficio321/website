"use client";

import React, { useState } from "react";

import { Button } from "../ui/button";

const ChatBot: React.FC = () => {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]); // Service options for quick start

  const serviceOptions = [
    "Direct and Indirect Tax Consulting",

    "MCA Services",

    "RERA Services",

    "International Tax",

    "Wealth Management",

    "Insurance",
  ];

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMsg = { sender: "user" as const, text: input };

    setMessages((prev) => [...prev, userMsg]);

    setIsLoading(true);

    setInput("");

    try {
      const res = await fetch("/api/groq-chat", {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,

        { sender: "bot", text: "There was an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 border rounded-lg shadow">
      <div className="p-4 h-80 overflow-y-auto bg-gray-50 flex flex-col gap-2">
        {messages.length === 0 && !isLoading && (
          <div className="text-center text-gray-700 flex flex-col items-center gap-4 h-full justify-center">
            <div>
              <div className="font-semibold text-lg mb-2">
                Welcome to Perficio!{" "}
              </div>

              <div className="mb-2">How can we help you today?</div>

              <div className="mb-2 text-sm text-gray-500">
                Type your queries below or select a service to get started:
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {serviceOptions.map((option) => (
                <button
                  key={option}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs hover:bg-blue-200 border border-blue-200"
                  onClick={() => {
                    setMessages((prev) => [
                      ...prev,

                      { sender: "user", text: option },
                    ]);

                    setIsLoading(true);

                    setInput("");

                    fetch("/api/groq-chat", {
                      method: "POST",

                      headers: { "Content-Type": "application/json" },

                      body: JSON.stringify({ message: option }),
                    })
                      .then((res) => res.json())

                      .then((data) => {
                        setMessages((prev) => [
                          ...prev,

                          { sender: "bot", text: data.reply },
                        ]);
                      })

                      .catch(() => {
                        setMessages((prev) => [
                          ...prev,

                          {
                            sender: "bot",

                            text: "There was an error. Please try again.",
                          },
                        ]);
                      })

                      .finally(() => setIsLoading(false));
                  }}
                  disabled={isLoading}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.length > 0 &&
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={msg.sender === "user" ? "text-right" : "text-left"}
            >
              {" "}
              <span
                className={
                  msg.sender === "user"
                    ? "inline-block bg-blue-500 text-white px-3 py-2 rounded-lg text-justify"
                    : "inline-block bg-gray-200 text-gray-900 px-3 py-2 rounded-lg text-justify"
                }
              >
                {msg.sender === "bot" ? (
                  <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : (
                  msg.text
                )}
              </span>
            </div>
          ))}{" "}
        {isLoading && (
          <div className="text-left">
            <span className="inline-block bg-gray-200 text-gray-900 px-3 py-2 rounded-lg">
              Typing...{" "}
            </span>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2 p-4 border-t bg-white"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg"
          disabled={isLoading}
        />

        <Button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-lg"
          disabled={isLoading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ChatBot;
