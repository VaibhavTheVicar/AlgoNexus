import React,{useState} from 'react'
import './Square.css'
function Square(props) {
    const [squareState, setSquare] = useState("unvisited")
    function interact(currentState,e){
        
        if(e.ctrlKey) 
        {setSquare("blocked")}

        if(e.altKey){
            setSquare("unvisited")
        }
    }
    
    return (
        <div className = {`square ${squareState}`} onMouseEnter = {(e)=>interact(squareState,e)} id = {`${props.row}.${props.col}`}>
        </div>
    )
}

export default Square
