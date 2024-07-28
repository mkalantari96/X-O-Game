import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, changeName] = useState(name);
  const [selectEdit, setIsEditing] = useState(false);

  let playerNameContainer = <span className="player-name">{playerName}</span>;

  if (selectEdit) {
    playerNameContainer = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  function handleChange(event) {
    changeName(event.target.value);
  }
  function handleClick() {
    setIsEditing((editing) => !editing);
    if (selectEdit) {
      onChangeName(symbol, playerName);
    }
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerNameContainer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{selectEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
