export default function GameBoard({ onSelectSqure, boards }) {
  // { square: { row: rowIndex, col: colIndex }, player: currentPlayer }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectButton(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updateBorad = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];

  //     updateBorad[rowIndex][colIndex] = activePlayerSymbol;

  //     return updateBorad;
  //   });
  //   onSelectSqure();
  // }

  return (
    <ol id="game-board">
      {boards.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSqure(rowIndex, colIndex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
