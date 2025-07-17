"use client";

import React, { useState, useEffect, useRef, JSX } from "react";

// Type definitions
interface Message {
  text: string;
  sender: "user" | "bot";
  isInitialGreeting?: boolean;
  isExpertOption?: boolean;
  isFollowUpQuestion?: boolean;
}

interface Service {
  name: string;
  icon: JSX.Element;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const perficioServices: Service[] = [
    {
      name: "Direct and Indirect Tax Consulting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      name: "MCA Services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-10v12m0-12H9" />
        </svg>
      ),
    },
    // ... More services as in your original array
  ];

  const perficioPhoneNumber = "+91-9699 800 600 / 022 49764411";
  const perficioEmail = "online@perificio.com";
  const perficioAddress = "Office no 23/24 | A Wing | Mezzanine Floor | Satyam Shopping Centre | M.G.Road | Ghatkopar (East) | Mumbai-400 077";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const initializeChat = () => {
    setMessages([
      {
        text: "Welcome to Perficio! How can I help you today? Please choose a topic from the menu or type your question below:",
        sender: "bot",
        isInitialGreeting: true,
      },
    ]);
  };

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      initializeChat();
    }
  }, [isChatOpen, messages.length]);

  const handleSendMessage = async (messageToSend: string = inputMessage) => {
    if (messageToSend.trim() === "") return;

    const newMessage: Message = { text: messageToSend, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const lower = messageToSend.toLowerCase();
      let botText = "";

      if (lower.includes("talk to our expert")) {
        setMessages((prev) => [
          ...prev,
          { text: `You can reach our experts by calling: ${perficioPhoneNumber}`, sender: "bot" },
        ]);
        await new Promise((r) => setTimeout(r, 1500));
        setMessages((prev) => [
          ...prev,
          { text: `You can also visit us at: ${perficioAddress}`, sender: "bot" },
        ]);
        setIsLoading(false);
        setMessages((prev) => [
          ...prev,
          { text: "Or, would you like to talk to our expert?", sender: "bot", isExpertOption: true },
          { text: "Is there anything else I can assist you with?", sender: "bot", isFollowUpQuestion: true },
        ]);
        return;
      } else if (lower.includes("contact") || lower.includes("address") || lower.includes("phone") || lower.includes("email")) {
        botText = `You can reach us at:\nPhone: ${perficioPhoneNumber}\nEmail: ${perficioEmail}\nAddress: ${perficioAddress}`;
      } else {
        botText = "Sorry, I couldn't get a response. Please try again."; // Placeholder until integrated with API
      }

      setMessages((prev) => [...prev, { text: botText, sender: "bot" }]);
      setMessages((prev) => [
        ...prev,
        { text: "Or, would you like to talk to our expert?", sender: "bot", isExpertOption: true },
        { text: "Is there anything else I can assist you with?", sender: "bot", isFollowUpQuestion: true },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { text: "There was an error. Please try again.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionClick = (optionName: string) => {
    if (optionName === "Yes") {
      setMessages([]);
      initializeChat();
    } else if (optionName === "No") {
      setMessages((prev) => [...prev, { text: "Thank you for chatting with Perficio! Have a great day.", sender: "bot" }]);
      setTimeout(() => {
        setIsChatOpen(false);
        setMessages([]);
      }, 2000);
    } else {
      handleSendMessage(optionName);
    }
  };

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className="font-sans antialiased">
      {/* Floating Button */}
      <button onClick={toggleChat} className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50">
        {isChatOpen ? "X" : "💬"}
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50 border">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg font-semibold">Perficio Chatbot</div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex mb-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] p-3 rounded-lg shadow-sm ${msg.sender === "user" ? "bg-blue-500 text-white rounded-br-none" : "bg-blue-100 text-blue-900 rounded-bl-none"}`}>
                  {msg.text}

                  {msg.isInitialGreeting && (
                    <div className="mt-4 space-y-2">
                      {perficioServices.map((s, i) => (
                        <button key={i} onClick={() => handleOptionClick(s.name)} className="w-full text-left p-3 rounded-md bg-white border hover:bg-gray-100 flex items-center">
                          {s.icon}
                          {s.name}
                        </button>
                      ))}
                      <button onClick={() => handleOptionClick("Contact Details")} className="w-full text-left p-3 rounded-md bg-white border hover:bg-gray-100 flex items-center">
                        📞 Contact Details
                      </button>
                    </div>
                  )}

                  {msg.isExpertOption && (
                    <div className="mt-4">
                      <button onClick={() => handleOptionClick("Talk to our expert")} className="w-full text-left p-3 rounded-md bg-white border hover:bg-gray-100 flex items-center justify-center">
                        🧑‍💼 Talk to our expert
                      </button>
                    </div>
                  )}

                  {msg.isFollowUpQuestion && (
                    <div className="mt-4 flex justify-center gap-2">
                      <button onClick={() => handleOptionClick("Yes")} className="px-4 py-2 bg-blue-600 text-white rounded-md">Yes</button>
                      <button onClick={() => handleOptionClick("No")} className="px-4 py-2 bg-blue-600 text-white rounded-md">No</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="max-w-[75%] p-3 rounded-lg shadow-sm bg-blue-100 text-blue-900 rounded-bl-none">
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-900 mr-2"></div>
                    Typing...
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-white flex items-center">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg mr-2"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !isLoading) handleSendMessage();
              }}
              disabled={isLoading}
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-blue-600 text-white p-2 rounded-lg disabled:opacity-50"
              disabled={isLoading}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
