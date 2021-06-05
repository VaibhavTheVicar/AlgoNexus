import React, { useState, useEffect } from "react";
import "./Grid.css";
import Square from "./Square";
import bfs from "../Algorithms/BFS.js";
import dfs from "../Algorithms/DFS.js";
function Grid(props) {
  const spawnSquares = () => {
    let grid = [];

    for (let i = 0; i < props.rows; i++) {
      let horizontal = [];
      for (let j = 0; j < props.cols; j++) {
        horizontal.push(<Square row={i} col={j} id={`${i}.${j}`} />);
      }
      grid.push(<div className="gridRow">{horizontal}</div>);
    }
    return grid;
  };

  useEffect(() => {}, []);
  return (
    <div className="grid">
      <button
        onClick={() => {
          bfs([0, 0], [props.rows-1, props.cols-1], props.rows, props.cols);
        }}
      >
        {" "}
        Start sim bfs
      </button>
      <button
        onClick={() => {
          dfs([0, 0],[props.rows-1, props.cols-1]);
        }}
      >
        {" "}
        Start sim dfs
      </button>
      {spawnSquares()}
    </div>
  );
}

export default Grid;
