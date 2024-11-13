import Player from "./components/Player";
import Swords from "./components/Swords";
import Ball from "./components/Ball";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol={<Swords />} />
          <Player name="Player 2" symbol={<Ball />} />
        </ol>
        {/* GAME BOARD */}
      </div>
      {/* LOG */}
    </main>
  );
}

export default App;
