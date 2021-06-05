import React,{useState} from 'react'
import './Square.css'
function Square(props) {
    const [squareState, setSquare] = useState("unvisited")
    function interact(currentState){
        if (currentState == "unvisited")
        {setSquare("blocked")}
        else{setSquare("unvisited")}
    }
    return (
        <div className = {`square ${squareState}`} onClick = {()=>interact(squareState)} ondragover={()=>interact(squareState)} id = {`${props.row}.${props.col}`}>
        </div>
    )
}

export default Square
