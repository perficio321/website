'use client';

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Send, Bot, User, Search } from 'lucide-react';

type MessageType = 'user' | 'bot';

interface Message {
  type: MessageType;
  content: string;
  timestamp: Date;
}

interface GstItem {
  hsn: string;
  description: string;
  sgst: number;
  cgst: number;
  igst: number;
  schedule: string;
}

export default function GSTChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content:
        '👋 Hello! I can help you find GST rates. Try entering an HSN code or product description.',
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null); // 👈 for auto-scroll

  // ✅ Auto-scroll to latest message when messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isTyping]);

  const searchGSTData = async (query: string): Promise<GstItem[]> => {
    if (query.toLowerCase().includes('8443')) {
      return [
        {
          hsn: '8443',
          description:
            'Printing machinery used for printing by means of the printing type, blocks, plates, cylinders and other printing components of heading 8442; other printers, copying machines and facsimile machines, whether or not combined; parts and accessories thereof.',
          sgst: 9,
          cgst: 9,
          igst: 18,
          schedule: 'III',
        },
      ];
    }
    if (query.toLowerCase().includes('0404')) return [];

    try {
      const response = await fetch('/api/gst-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  const formatGSTResponse = (results: GstItem[], originalQuery: string): string => {
    if (results.length === 0) {
      return `❌ No GST rate found for **"${originalQuery}"**.\n\nTry:\n• A different HSN code\n• Other product keywords`;
    }

    const item = results[0];
    const desc =
      item.description.length > 180
        ? item.description.substring(0, 180).trim() + '...'
        : item.description;

    let response = `✅ **Match Found for HSN ${item.hsn}**\n\n`;
    response += `**Description:** ${desc}\n\n`;
    response += `**GST Rates:**\n• IGST: **${item.igst || 0}%**\n• CGST: ${
      item.cgst || 0
    }%\n• SGST: ${item.sgst || 0}%`;

    if (results.length > 1) {
      response += `\n\n_🔍 ${results.length - 1} more results found. Try refining your query._`;
    }

    return response;
  };

  const handleSend = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    const results = await searchGSTData(currentInput);

    const botResponse: Message = {
      type: 'bot',
      content: formatGSTResponse(results, currentInput),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botResponse]);
    setIsTyping(false);
    inputRef.current?.focus({ preventScroll: true });
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderMessageContent = (content: string) => {
    return content.split('\n').map((line, idx) => {
      let renderedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      if (renderedLine.startsWith('• ')) {
        return (
          <div key={idx} className="ml-4 flex items-start text-sm">
            <span className="mr-2 text-indigo-500">•</span>
            <span dangerouslySetInnerHTML={{ __html: renderedLine.substring(2) }} />
          </div>
        );
      }

      if (renderedLine.startsWith('_') && renderedLine.endsWith('_')) {
        return (
          <div
            key={idx}
            className="italic text-gray-400 mt-2"
            dangerouslySetInnerHTML={{ __html: renderedLine.replace(/_/g, '') }}
          />
        );
      }

      if (renderedLine.startsWith('❌')) {
        renderedLine = `<span class="text-red-500">${renderedLine}</span>`;
      } else if (renderedLine.startsWith('✅')) {
        renderedLine = `<span class="text-green-500">${renderedLine}</span>`;
      }

      return (
        <div
          key={idx}
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: renderedLine || '<br />' }}
        />
      );
    });
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex-shrink-0 bg-indigo-600 p-4 shadow-md">
        <div className="flex items-center gap-3">
          <Search className="w-6 h-6 text-white" />
          <div>
            <h1 className="text-lg font-bold text-white">Find GST Rates Instantly</h1>
            <p className="text-sm text-indigo-200">
              Type HSN code or product keyword
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Chat Container (hidden scrollbar + auto-scroll) */}
      <div
        ref={chatContainerRef}
        className="flex-1 min-h-0 overflow-y-auto bg-gradient-to-b from-white to-indigo-50 
                   p-4 space-y-4 scroll-smooth hide-scrollbar"
      >
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex gap-3 ${
              message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${
                message.type === 'bot' ? 'bg-indigo-600' : 'bg-gray-500'
              }`}
            >
              {message.type === 'bot' ? (
                <Bot className="w-5 h-5 text-white" />
              ) : (
                <User className="w-5 h-5 text-white" />
              )}
            </div>
            <div
              className={`max-w-[80%] px-5 py-3 rounded-xl text-base shadow-md ${
                message.type === 'bot'
                  ? 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                  : 'bg-indigo-600 text-white rounded-tr-none'
              }`}
            >
              {renderMessageContent(message.content)}
              <div
                className={`text-xs mt-1 text-right ${
                  message.type === 'bot' ? 'text-gray-400' : 'text-indigo-200'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white px-4 py-3 rounded-xl shadow-md rounded-tl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '150ms' }}
                />
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 p-3 shadow-inner">
        <div className="flex items-center gap-2">
          <input
            type="text"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter HSN code or product description..."
            className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full 
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full 
                       disabled:opacity-50 transition shadow-lg"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="text-xs text-center text-gray-400 mt-2">
          Try: "8443" or "printing machinery"
        </div>
      </div>
    </div>
  );
}
