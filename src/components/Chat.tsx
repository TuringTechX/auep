// src/components/Chat.tsx
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('https://api.example.com'); // Your backend Socket.io server

interface ChatProps {
  courseId: string;
}

const Chat: React.FC<ChatProps> = ({ courseId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.emit('joinRoom', courseId);

    socket.on('message', (newMessage: string) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.emit('leaveRoom', courseId);
      socket.off();
    };
  }, [courseId]);

  const sendMessage = () => {
    if (message) {
      socket.emit('chatMessage', message);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded w-full py-2 px-4"
          placeholder="Enter your message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 ml-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
