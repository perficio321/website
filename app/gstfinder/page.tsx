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
    // Removed all mock messages. The chat will now start clean.
  ]);

  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null); // 👈 Added ref for the input element

  // Auto-scrolling logic (for the internal chat area)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const searchGSTData = async (query: string): Promise<GstItem[]> => {
    // NOTE: Keep your existing fetch if /api/gst-search is working.
    // Mock for demonstration:
    if (query.toLowerCase().includes('8443')) {
      return [
        {
          hsn: '8443',
          description: 'Printing machinery used for printing by means of the printing type, blocks, plates, cylinders and other printing components of heading 8442; other printers, copying machines and facsimile machines, whether or not combined; parts and accessories thereof.',
          sgst: 9,
          cgst: 9,
          igst: 18,
          schedule: 'III'
        }
      ];
    }
    if (query.toLowerCase().includes('0404')) {
      return []; // Simulate no result
    }

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
    const desc = item.description
      ? item.description.substring(0, 180).trim() +
        (item.description.length > 180 ? '...' : '')
      : 'No description available.';

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
    
    // ✅ FIX: Manually set focus back to the input, but prevent the page from scrolling.
    // This maintains the cursor in the box without jumping the entire page.
    inputRef.current?.focus({ preventScroll: true }); 
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderMessageContent = (content: string) => {
    // This function converts markdown-style bold and list items into HTML elements
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
      
      // Handle the '❌' and '✅' symbols
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
    // UPDATED FIX: Changed min-h-[70vh] to min-h-[85vh] for a better look on large screens.
    <div className="flex flex-col max-w-3xl mx-auto py-8 bg-white rounded-xl shadow-2xl border border-gray-100 min-h-[85vh] h-full">
      
      {/* Header (Fixed height within the component) */}
      <div className="flex-shrink-0 bg-indigo-600 p-4 rounded-t-xl shadow-md">
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

      {/* Chat messages 
          **THIS IS THE SCROLLING AREA:** `flex-1` makes it grow to fill all available vertical space, 
          `overflow-y-auto` ensures the scrolling stays local to this message box.
      */}
      <div className="flex-1 p-4 space-y-4 bg-gradient-to-b from-white to-indigo-50 overflow-y-auto scrollbar-hide">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex gap-3 ${
              message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div
              // Increased avatar size to w-9 h-9
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
              // Increased message padding to px-5 py-3
              className={`max-w-[80%] px-5 py-3 rounded-xl text-base shadow-md ${ // Changed text-sm to text-base for better readability
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

        {/* Typing animation */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white px-4 py-3 rounded-xl shadow-md rounded-tl-none">
              <div className="flex gap-1">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0ms' }}
                />
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
        <div ref={messagesEndRef} />
      </div>

      {/* Input (Fixed to bottom of the component) */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 p-3 shadow-inner">
        <div className="flex items-center gap-2">
          <input
            type="text"
            ref={inputRef} // 👈 Applied ref to the input element
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter HSN code or product description..."
            className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full disabled:opacity-50 transition shadow-lg"
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
