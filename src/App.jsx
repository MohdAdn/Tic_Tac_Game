import { useState } from "react";
import "./App.css";
import Cell from "./components/cell";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Cell></Cell>
    </>
  );
}

export default App;
