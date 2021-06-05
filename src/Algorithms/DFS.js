import asyncAwait from '../Utilities/AsyncDelay.js'
import  {visit,isInbound,isBlocked,adjacent,trace} from '../Utilities/Traversal.js'


const dfsutil = async (point,parent) =>{
    for (let v of adjacent(point)){
        if(isInbound(v[0],v[1]))
        {    if (parent[v]==undefined  && !isBlocked(v[0],v[1])){
                parent[v] = point;
                await asyncAwait(10);
                visit(v[0],v[1])
                dfsutil(v,parent)
            }}
    }
    
}

const dfs =async (point,destination)=>{
    var parent = {point: [-1,-1]}
    await dfsutil(point,parent);
    await asyncAwait(1000);
    while(destination)
    {
    console.log(parent[destination])
    await asyncAwait(100)
    trace(destination[0],destination[1])
    destination = parent[destination]
    }
}
export default dfs