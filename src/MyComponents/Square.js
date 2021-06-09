import React, { useState } from "react";
import "./Square.css";
function Square(props) {
  const [squareState, setSquare] = useState("unvisited");
  function interact(currentState, e) {
    console.log(e.buttons == 1);
    if (e.ctrlKey || e.buttons == 1) {
      setSquare("blocked");
    }

    if (e.altKey || e.buttons == 2) {
      setSquare("unvisited");
    }
  }
  const handleClick = () => {
    if (squareState == "blocked") 
    {setSquare("unvisited");}
    else 
    {setSquare("blocked");}
  };
  return (
    <div
      className={`square ${squareState}`}
      onClick={handleClick}
      onMouseEnter={(e) => interact(squareState, e)}
      id={`${props.row}.${props.col}`}
    ></div>
  );
}
export default Square;
