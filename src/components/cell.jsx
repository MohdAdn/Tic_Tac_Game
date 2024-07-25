import { useState } from "react";
import Square from "./square";

function Cell() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setisXturn] = useState(true);
  function handleClick(index) {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setisXturn(!isXturn);
    //console.log(index);
  }
  const checkWinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const iterator of winnerlogic) {
      const [a, b, c] = iterator;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    if (state.every((square) => square !== null)) {
      return "draw";
    }
    return false;
  };
  const isWinner = checkWinner();
  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="container">
      {isWinner ? (
        <>
          It is Game of {isWinner}
          <div>
            <br />
            <br />
            <button onClick={handleReset}> Play Again</button>
          </div>
        </>
      ) : (
        <>
          <h3>{isXturn ? "X" : "O"} Turn</h3>

          <div className="cell">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="cell">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="cell">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}
export default Cell;
