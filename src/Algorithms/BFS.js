import asyncAwait from '../Utilities/AsyncDelay.js'
import  {visit,isInbound,isBlocked,adjacent,trace} from '../Utilities/Traversal.js'

  const bfs = async (start, end, c, r) => {
    console.log(start,">>>")
    console.log(end,">>>>>>>>")
    let level = {};
    level[start] = 0;
    let parent = {};
    parent[start] = undefined;
    let lvl = 1;
    let frontier = [start];
    while (frontier.length != 0) {
      let new_front = [];
      for (let u of frontier) {
        
        for (let v of adjacent(u)) {
            
          if (
            level[v] == undefined &&
            isInbound(v[0],v[1]) &&
            !isBlocked(v[0],v[1])
          ) {
            
            level[v] = lvl;
            parent[v] = u;
            new_front.push(v);
            await asyncAwait(10)
            visit(v[0],v[1])
            if (v[0] == end[0] && v[1] == end[1]) {
              console.log("reached",lvl);
              traceback(parent,end);
              return lvl;
            }
          }
        }
      }
      // console.log(`front:${lvl}${new_front}`);
      lvl += 1;
      frontier = [...new_front];
    }
    
  };

  const traceback = async (parent,point)=>{
      console.log("tracing",parent)
      while(parent[point]){
        await asyncAwait(100)
        trace(point[0],point[1])
        point = parent[point]
      }
  }
 export default bfs