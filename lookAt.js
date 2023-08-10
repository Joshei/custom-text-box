

//why have this when temparray is completely replaced in for loop
let tempArray = JSON.parse(JSON.stringify(nestedArray));

let newValue = nestedArray[x][y];
tempArray[nextX][nextY] = newValue;
                      
nestedArray = [...tempArray];
nestedArray[currentIndex.x][currentIndex.y] = gKey;






getNextTarget(x,y){
          let nextX = x, nextY = y;
          if(y === WIDTH -1 && x === HEIGHT -1){
  
  
          } else if(y === WIDTH -1){
              nextY = 0;
              nextX = x + 1;
          } else {
              nextY =  y +1;
          }
  
          return {
              nextX,
              nextY
          }
  
  
  
}
      