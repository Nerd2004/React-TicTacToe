import { useEffect, useState } from "react";
import "./Game.css";
import WebSocket, { WebSocketServer } from "ws";
function Game() {
  const [count, setCount] = useState(0);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currPlayer, setCurrPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrPlayer("X");
    setWinner("");
    setCount(0);
    document.querySelector(".line").style.backgroundColor = "#091B3A";
    document.querySelector(".line").style.transform =
      "rotate(0) translate(0vh,0vh)";
  };

  const draw = (a, b, c, x, y, angle) => {
    const line = document.querySelector(".line");
    line.style.backgroundColor = "white";
    line.style.transform = `rotate(${angle}deg) translate(${x}vh,${y}vh)`;
  };

  const checkWin = (board, player) => {
    const wins = [
      [0, 1, 2, 0, 12.5, 0],
      [3, 4, 5, 0, 27, 0],
      [6, 7, 8, 0, 41.5, 0],
      [0, 3, 6, 27, 15.5, 90],
      [1, 4, 7, 27, 0, 90],
      [2, 5, 8, 27, -15.5, 90],
      [0, 4, 8, 19, 19, 45],
      [2, 4, 6, -18.5, 19, -45],
    ];
    for (let i = 0; i < wins.length; i++) {
      const [a, b, c, d, e, f] = wins[i];
      if (board[a] === player && board[b] === player && board[c] === player) {
        setWinner(player);
        draw(a, b, c, d, e, f);
        break;
      }
    }
    if (count === 9 && winner === "") tur.innerText = "DRAW";
  };

  const handleBoxClick = (index) => {
    if (board[index] === "" && !winner) {
      const newBoard = [...board];
      setCount(count + 1);
      newBoard[index] = currPlayer;
      setBoard(newBoard);
      setCurrPlayer(currPlayer === "X" ? "O" : "X");
      checkWin(newBoard, currPlayer);
    }
  };

  const renderBox = (index) => {
    return (
      <button className="slot" onClick={() => handleBoxClick(index)}>
        {board[index]}
      </button>
    );
  };

  return (
    <>
      <div className="game">
        <div id="turn">
          <span id="text">
            {winner
              ? `Player ${winner} wins!`
              : count === 9
              ? "DRAW"
              : `Its ${currPlayer}'s Turn`}
          </span>
        </div>
        <div className="line"></div>
        <div className="board">
          <div className="row">
            {renderBox(0)}
            {renderBox(1)}
            {renderBox(2)}
          </div>
          <div className="row">
            {renderBox(3)}
            {renderBox(4)}
            {renderBox(5)}
          </div>
          <div className="row">
            {renderBox(6)}
            {renderBox(7)}
            {renderBox(8)}
          </div>
        </div>
        <button className="buttons" onClick={resetGame}>
          RESET
        </button>
      </div>
    </>
  );
}

export default Game;
