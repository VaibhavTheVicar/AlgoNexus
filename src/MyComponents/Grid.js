import React,{useState} from "react";
import  {visit,isInbound,isBlocked,adjacent,trace} from '../Utilities/Traversal.js'
import "./Grid.css";
import Square from "./Square";
import bfs from "../Algorithms/BFS.js";
import dfs from "../Algorithms/DFS.js";
function Grid(props) {

  const[open,setOpen] = useState(false)
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
   function retrieve() {
    const s = [
      parseInt(document.getElementById("sourceX").value)
        ? parseInt(document.getElementById("sourceX").value)
        : 0,
      parseInt(document.getElementById("sourceY").value)
        ? parseInt(document.getElementById("sourceY").value)
        : 0,
    ];
    const e = [
      parseInt(document.getElementById("destX").value)
        ? parseInt(document.getElementById("destX").value)
        : props.rows - 1,
      parseInt(document.getElementById("destY").value)
        ? parseInt(document.getElementById("destY").value)
        : props.cols - 1,
    ];
    if(!(isInbound(s[0],s[1]) && isInbound(e[0],e[1]))){
      alert(`Out Of Bounds!!`)
      return false
  }
    return [s, e];
  }
  return (
    <>
    {open?(<>
      <div className="grid">
        <div className="prompt">
      <h4>How to build walls?</h4>
    <p>Press (control and hover) or just (left-click and hover) over tiles to make them un-traversable.</p>
    <h4>How to break the walls?</h4>
    <p>Change of mind? Press (alt and hover) or just (right-click and hover) over blocked tiles to make them traversable, again.</p>
    <h4>Setting start point and the goal post.</h4>
    <p>Set, start and end x,y co-ordinates respectively, on the left and right inputs; Make sure to not go out of bounds, for Y co-ordinate you can go 0 through 19 and for x you can go 0 through 29.</p>
    <h4>Run simulations.</h4>
    <p>By pressing BFS/DFS/Dijkstra or whatever you fancy.</p>
    
    <button onClick = {()=>{
            setOpen(false)
          }}>Ok!</button>
          </div></div></>):
      (<div className="grid">
        <div className="header__grid">
        
          <div className="sourcepoint">
          <p>Source</p>
            <input type="number" id="sourceX" placeholder="0" />
            <input type="number" id="sourceY" placeholder="0" />
          </div>
          
          <div className="destinationpoint">
          <p>Destination</p>
            <input type="number" id="destX" placeholder="19" />
            <input type="number" id="destY" placeholder="29" />
          </div>
          <button
            onClick={async () => {
              const params = retrieve();
              if(params)bfs(params[0], params[1], props.rows, props.cols);
            }}
          >
            {" "}
            BFS
          </button>
          <button
            onClick={async () => {
              const params = retrieve();
              if(params)dfs(params[0], params[1]);
            }}
          >
            {" "}
            DFS
          </button>
          <button onClick = {()=>{
            setOpen(true)
          }}>Info</button>
        </div>
        <div className="gridSquares">{spawnSquares()}</div>
      </div>)
}
    </>
  );
}

export default Grid;
