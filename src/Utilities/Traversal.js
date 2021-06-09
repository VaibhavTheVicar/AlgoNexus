const visit = (i, j) => {
   
    var element = document.getElementById(`${i}.${j}`);
    element.classList.remove("unvisited");
    element.classList.remove("blocked");
    element.classList.add("visited");
  };
  
  const unvisit = (i, j) => {
   
    var element = document.getElementById(`${i}.${j}`);
    element.classList.add("unvisited");
    element.classList.remove("blocked");
    element.classList.remove("visited");
  };
const trace = (i, j) => {
  
  var element = document.getElementById(`${i}.${j}`);
  element.classList.remove("unvisited");
  element.classList.remove("blocked");
  element.classList.remove("visited");
  element.classList.add("traced");
};
const isInbound = (i,j)=>{

    if(document.getElementById(`${i}.${j}`)) return true
    return false
}
const isBlocked = (i,j) =>{
    
    const inbound =document.getElementById(`${i}.${j}`)
    return inbound.classList.contains("blocked")
    
    
}

function adjacent(e) {
    return [
      [e[0], e[1] + 1],
      [e[0], e[1] - 1],
      [e[0] + 1, e[1]],
      [e[0] - 1, e[1]],
      [e[0]+1, e[1] + 1],
      [e[0]-1, e[1] - 1],
      [e[0] + 1, e[1]-1],
      [e[0] - 1, e[1]+1],

      
      
    ];
  }

  export {unvisit,visit,isInbound,isBlocked,adjacent,trace}