import React from "react";
import "./Home.css"; // Create a CSS file for styling the component

const Home = () => {
  return (
    <div className="button-container">
      <a href="/game">
        <button className="turn">
          <span id="text">Play Offline</span>
        </button>
      </a>
      <a href="/createroom">
        <button className="turn">
          <span id="text">Create Room</span>
        </button>
      </a>
      <a href="playfriend">
        <button className="turn">
          <span id="text">Play with Friends</span>
        </button>
      </a>
      <a href="random">
        <button className="turn">
          <span id="text">Play with Random</span>
        </button>
      </a>
    </div>
  );
};

export default Home;
