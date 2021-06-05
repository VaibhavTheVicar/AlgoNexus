import "./App.css";
import React, { useState, useEffect } from "react";
import Grid from "./MyComponents/Grid.js"
export default function App() {
  const cols =30
  const rows =20
  const [rst,setRst] = useState(0);
  const reset = () =>{
      setRst(rst+1)
  }
  return (<>
  <Grid cols = {cols} rows = {rows} rstHook = {rst}/>
  </>);
}

 