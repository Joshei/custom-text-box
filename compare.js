class InsertClass {

  constructor() {
    this.gNullCharacterNotFound = false;
    
  }
  


    z = 0 ;
    makeTwoDimArrayWithInsertion() {
          
      //alert("1");
          //rows
          for (let i = 0; i < HEIGHT; i = i + 1) {
            //columns
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
///////////////
    

// yToCheck = y;
// xToCheck = x  //if last character is null, return out, otherwise insert pushes to followingThanks  row. 
// otherwise start insert next row

  getNextTarget(x, y) {
  //on last character of line - so we insert the next line until the final check
    if (x % WIDTH == 1) {
    
      if ((nestedArray[y][x]) == null) {
        return
      }
  }
  let nextX = x, nextY = y;
  if(x === WIDTH -1 && y === HEIGHT -1){

  } else if (x === WIDTH - 1) {
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
      let maxY = HEIGHT;
      let maxX = WIDTH;
      let currentIndex = {
          y: verticalCursorPosition/10,
          x: horizontalCursorPosition/5
      }
  
  
      //gNullCharacterFound = false;
     
      
      
      let breakFlag = 0;
      //last element of row is null, so this will be last y value
      //if null finish this row only
      if ( nestedArray[verticalCursorPosition/10][WIDTH] == "") {
             
        
        breakFlag = 1;
        
      }


      for (let y = 0; y < maxY; y++){

        
        
       

          for(let x = 0; x < maxX; x++){
     
            //breaks out 
            
            if (breakFlag == 1 && (x % (WIDTH - 1)) == 1) {
              alert("breaks out");
              return
            }
            

            

            

            

                  //CHANGED
                  if(x <= currentIndex.x - 1 && y <= currentIndex.y - 1){
  
                   
                  } else if( x <= currentIndex.x -1 ){
                    
                  }else {
                      let {nextX, nextY} = this.getNextTarget(x,y);
                      //gconsole.log(x,y, nestedArray[y][x], "==>", nextX, nextY,  tempArray[nextX][nextY] );
  
                      let newValue = nestedArray[y][x];
                    tempArray[nextY][nextX] = newValue;
                   
                  }
  
              }
          }
  
        nestedArray = [...tempArray];
        nestedArray[currentIndex.y][currentIndex.x] =  gKey;
      /*
  
      let countLines = 0;
      for (let y = verticalCursorPosition / 10; y > HEIGHT; y++) {
  
        countLines++;
        //is a character on last line
        if (tempArray[y][WIDTH - 1] != "" && tempArray[y][WIDTH - 1] != " ") {
          break;
        }
      }
  
  
  
      tempArray[verticalCursorPosition / 10][horizontalCursorPosition/5] = gKey
  
  
      let count = 0;
      //move characters to right on first row, after innitial character, see above.
      //Isnt working, doesn't display string after gKey
        /*
      for (let x = ((horizontalCursorPosition + 5) / 5); x < (WIDTH - 1); x = x + 1)
      {
  
        //move characters to right for first row
        tempArray[(verticalCursorPosition / 10)][(x)] = tempArray[(verticalCursorPosition / 10)][(x + 1)]
  
  
        console.log( "test2: b => a", (verticalCursorPosition / 10), (x+1), '=>' , x );
      }
  
      console.log("test1a: ", tempArray);
      countLines++
  
  */
  
  
  
      drawGrid()
  
      
      horizontalCursorPosition = horizontalCursorPosition + 5;
      if (((horizontalCursorPosition / 5) % (WIDTH)) === 0) {
       
        verticalCursorPosition = verticalCursorPosition + 10;
        horizontalCursorPosition = 0;
      }
  
      
      
      //alert("2: ",horizontalCursorPosition)
      //alert("1: ",verticalCursorPosition)
      CursorMovements.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
        
  
      //alert("here2");
  
    }//end of insertion function
  }
  