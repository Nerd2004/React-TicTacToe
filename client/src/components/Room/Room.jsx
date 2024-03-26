// import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import "./Room.css";

function App() {
  useEffect(() => {
    const socket = io.connect("http://localhost:3001");

    return () => {
      socket.disconnect();
    };
  }, []);

  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  return (
    <div className="messagebox">
      <div id="roomno">
        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}> Join Room</button>
      </div>
    </div>
  );
}

export default App;
