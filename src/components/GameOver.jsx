export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} wins!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={() => window.location.reload()}>Play again</button>
      </p>
    </div>
  );
}
