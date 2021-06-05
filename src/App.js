import "./App.css";
import React, { useState, useEffect } from "react";
import Grid from "./MyComponents/Grid.js"
export default function App() {
  const cols =30
  const rows =20
  // const visit = async (i,j)  =>{
  //   var id = i+"."+j
  //   var element = document.getElementById(id);
  //   element.classList.remove("unvisited");
  //   element.classList.add("visited");
  //   element.classList.remove("blocked")
  // }

  
  // useEffect(async () => {
  //   for(let i = 0;i<rows/2;i++){
  //     for(let j=0;j<cols/2;j++){
        
  //         visit(i,j)
  //     }
  //   }
    
  // }, [])
 
  // const blocked = (i,j) => {
  //   var id = i+"."+j
  //   var element = document.getElementById(id);
  //   element.classList.remove("unvisited");
  //   element.classList.remove("visited");
  //   element.classList.add("blocked")
  // }
  return (<>
  <Grid cols = {cols} rows = {rows}/>
  </>);
}

 