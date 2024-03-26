import React from "react";
import Game from "./components/Game";
import Home from "./components/Home";
import Room from "./components/Room/Room";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createroom" element={<Room />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
