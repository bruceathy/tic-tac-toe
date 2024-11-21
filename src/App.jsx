import Player from "./components/Player";
import Swords from "./components/Swords";
import Ball from "./components/Ball";
import Gameboard from "./components/Gameboard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol={<Swords />} />
          <Player initialName="Player 2" symbol={<Ball />} />
        </ol>
        <Gameboard />
      </div>
      {/* LOG */}
    </main>
  );
}

export default App;
