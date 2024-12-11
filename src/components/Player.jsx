import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(initialName);

  function handleEditClick(e) {
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  let playerName = <span className="player-name">{newName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        defaultValue={newName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
