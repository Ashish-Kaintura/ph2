"use client";
import { useState, useEffect } from "react";
import { FaRobot } from "react-icons/fa";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  useEffect(() => {
    const initialMessage = {
      text: 'Hello! How can I assist you today? Type "Hello" or "Hi" to start.',
      sender: "bot",
    };
    setMessages([initialMessage]);
  }, []);

  const handleSend = async () => {
    if (input.trim() === "") return; // Prevent sending empty messages

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const botMessages = await response.json();
    setMessages((prevMessages) => [...prevMessages, ...botMessages]);
  };
  const handleOptionClick = (link) => {
    // Open the link in a new tab
    window.open(link, "_blank");
  };

  const openChatModal = () => {
    setIsChatModalOpen(true);
  };

  const closeChatModal = () => {
    setIsChatModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openChatModal}
        className="bg-blue-600 text-white rounded-full flex justify-center items-center"
        style={{
          position: "fixed",
          width: "50px",
          height: "50px",
          bottom: "250px",
          right: "15px",
          zIndex: 9999,
        }}
      >
        <FaRobot className="text-3xl" />
      </button>
      {isChatModalOpen && (
        <div className="block justify-center p-4 bg-white z-10 chat-modal sm:w-[450px] ">
          <div className="relative p-4">
            <button
              onClick={closeChatModal}
              className="absolute -top-9 -right-6 text-2xl font-bold m-4 text-black hover:text-red-500"
            >
              &times;
            </button>
            <div className="h-80 border p-4 overflow-y-scroll">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.sender === "user" ? "text-right" : ""
                  }`}
                >
                  <p
                    className={`p-2 rounded ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {msg.text}
                  </p>
                  {msg.options && (
                    <div className="mt-2">
                      {msg.options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(option.link)}
                          className="block text-blue-500 underline my-1"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <input
              type="text"
              className="border p-2 w-full mt-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-blue-500 text-white p-2 w-full mt-2"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
