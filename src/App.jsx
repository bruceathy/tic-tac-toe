import { useState } from "react";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(row) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex } },
        ...prevTurns,
      ];
    });
  }

  return (
    // <main>
    //   <div id="game-container">
    //     <ol id="players" className="highlight-player">
    //       <Player
    //         initialName="Player 1"
    //         symbol="X"
    //         isActive={activePlayer === "X"}
    //       />
    //       <Player
    //         initialName="Player 2"
    //         symbol="O"
    //         isActive={activePlayer === "O"}
    //       />
    //     </ol>
    //     <Gameboard
    //       onSelectSquare={handleSelectSquare}
    //       activePlayerSymbol={activePlayer}
    //     />
    //   </div>
    //   <Log />
    // </main>
  );
}

export default App;
