

class InsertClass {


    z = 0 ;
    makeTwoDimArrayWithInsertion() {
          
      //alert("1");
          //rows
          for (let i = 0; i < HEIGHT; i = i + 1) {
            //columnsjavascript s
            for (j = 0; j < WIDTH; j = j + 1, z++) {
              nestedArray[i][j] = oneDimArray[z]
            }
          }
          z = 0
  
          drawGrid()
          CursorMovements.drawCursor(
            horizontalCursorPosition + HOFFSET,
            verticalCursorPosition + VOFFSET
          )
        }
  
        
      //turn two dimensional array into one dimensional array
    makeOneDimArray() {
      
          for (let i = 0; i < HEIGHT; i = i + 1) {
            //rows
            for (let j = 0; j < WIDTH; j = j + 1) {
              oneDimArray.push(nestedArray[i][j])
            }
          }
      
          console.log("#A ",nestedArray )
    
    }
  /*
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
  */
  getNextTarget(y,x){
    let nextX = x, nextY = y;
    if(x === WIDTH -1 && y === HEIGHT -1){


    } else if(x === WIDTH -1){
        nextX = 0;
        nextY = y + 1;
    } else {
        nextX =  x +1;
    }

    return {
        nextY,
        nextX
    }



  }
  
    //inserts a character into array 
    insertCharacter() {
  
        //I need to stringfy and parse to copy the value
        //if you do tempArray = nestedArray it creates a reference
        //which means modify temp modifies the original
        //we want them to keep them seperate for the shift
  
      let tempArray = JSON.parse(JSON.stringify(nestedArray));
      let maxX = WIDTH;
      let maxY = HEIGHT;
      let currentIndex = {
          y: verticalCursorPosition/10,
          x: horizontalCursorPosition/5
      }
  
  /*
          for(let x = 0; x < maxX; x++){
              for(let y = 0; y < maxY; y++){
                  if(x <= currentIndex.x && y <= currentIndex.y - 1){
  
                  } else if( x <= currentIndex.x -1 ){
  
                  }else {
                      let {nextX, nextY} = this.getNextTarget(x,y);
                      console.log(x,y, nestedArray[x][y], "==>", nextX, nextY,  tempArray[nextX][nextY] );
  
                      let newValue = nestedArray[x][y];
                      tempArray[nextX][nextY] = newValue;
                  }
  
              }
          }
  
        nestedArray = [...tempArray];
        nestedArray[currentIndex.x][currentIndex.y] =  gKey;
    */      
      
        for(let y = 0; y < maxY; y++){
          for(let x = 0; x < maxX; x++){
              if(y <= currentIndex.y && x <= currentIndex.x - 1){

              } else if( y <= currentIndex.y -1 ){

              }else {
                  let {nextY, nextX} = this.getNextTarget(y,x);
                  //console.log(x,y, nestedArray[x][y], "==>", nextX, nextY,  tempArray[nextX][nextY] );

                  let newValue = nestedArray[y][x];
                  tempArray[nextY][nextX] = newValue;
              }

          }
      }

    nestedArray = [...tempArray];
    nestedArray[currentIndex.y][currentIndex.x] =  gKey;
      
      
      
      
      
      
      
      
      drawGrid()
  
      
      horizontalCursorPosition = horizontalCursorPosition + 5;
      if (((horizontalCursorPosition / 5) % (WIDTH)) === 0) {
        //alert("!");
        verticalCursorPosition = verticalCursorPosition + 10;
        horizontalCursorPosition = 0;
      }
  
      
      
      //alert("2: ",horizontalCursorPosition)
      //alert("1: ",verticalCursorPosition)
      CursorMovements.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
        
  
  
  
    }//end of insertion function
  }
  