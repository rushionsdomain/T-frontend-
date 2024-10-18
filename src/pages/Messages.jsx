// src/pages/Messages.jsx
import { useState } from "react";
import "../styles/message.css"; // Import the CSS for styling

// Dummy Data: Users and their message threads
const users = [
  {
    id: 1,
    name: "Alice",
    messages: ["Hey!", "How are you?", "Let's catch up soon."],
  },
  { id: 2, name: "Bob", messages: ["What's up?", "Got time to talk?"] },
  {
    id: 3,
    name: "Charlie",
    messages: [
      "Did you check the group project?",
      "Let me know what you think.",
    ],
  },
  {
    id: 4,
    name: "Dana",
    messages: ["I just posted new photos.", "See you tomorrow!"],
  },
  { id: 5, name: "Eve", messages: ["Can you send the notes?", "Thanks!"] },
  { id: 6, name: "Frank", messages: ["Yo!", "You coming to the event?"] },
  { id: 7, name: "Grace", messages: ["Good morning!", "Have a nice day."] },
  {
    id: 8,
    name: "Hank",
    messages: ["Are you free today?", "Let's grab lunch."],
  },
  {
    id: 9,
    name: "Ivy",
    messages: ["Any updates on the project?", "Keep me posted."],
  },
  {
    id: 10,
    name: "Jack",
    messages: ["I'll be late today.", "Catch you later!"],
  },
];

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]); // Default to first user
  const [newMessage, setNewMessage] = useState(""); // Store new message

  // Function to handle sending a new message
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setSelectedUser((prevUser) => ({
        ...prevUser,
        messages: [...prevUser.messages, newMessage],
      }));
      setNewMessage(""); // Clear the input box
    }
  };

  return (
    <div className="messages-container">
      {/* Sidebar with user list */}
      <div className="sidebar">
        <h3>Chats</h3>
        {users.map((user) => (
          <div
            key={user.id}
            className={`user ${user.id === selectedUser.id ? "active" : ""}`}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </div>
        ))}
      </div>

      {/* Chat window with the selected user's messages */}
      <div className="chat-window">
        <div className="chat-header">
          <h3>{selectedUser.name}</h3>
        </div>

        <div className="chat-body">
          {selectedUser.messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>

        {/* Input box for sending new messages */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
