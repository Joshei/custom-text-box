//10/5/23
//Today worked on over the border text.  The code make the text to move erased on the original row.  First put a character on
//end of row and than on string of characters


class InsertClass {
   
    constructor(){
      this.indexOfXForLineBeforeLastRowSpace = 0
      this.StartedCapture = false
      this.GotWordAllready = true
      this.InsertWordToArray = false
      this.IsFirstCharacterPos = 5
      this.RemoveBeforeWidth = false
    }
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

  //put removeword at top, when called set flag to leave insert in removeword
 removeWord(y){

  console.log("A:", this.indexOfXForLineBeforeLastRowSpace)
  console.log("here: ", verticalCursorPosition/10);
  //if(nestedArray[0][9] == '-'){
  //  alert("1");
  //  return
  //}

  if(horizontalCursorPosition/5 === WIDTH-1){
    //alert("2");
    return
  }

  alert("here");
  //alert("here");
    
    console.log("B:", y)
    console.log("x:", x, "y: ", y);
  let toMoveString = []
  for(let x = this.indexOfXForLineBeforeLastRowSpace+1; x < WIDTH; x++){
       let element = nestedArray[verticalCursorPosition/10][x]
       toMoveString[x] = element
       console.log("B: ", toMoveString)

    }

    console.log("C:", this.indexOfXForLineBeforeLastRowSpace+1)
  for(let x = this.indexOfXForLineBeforeLastRowSpace+1; x < WIDTH; x++){
  nestedArray[verticalCursorPosition/10][x] = 'Z'
  }

  //for(let x = this.indexOfXForLineBeforeLastRowSpace + 1 ; ){
  //  nestedArray[y][x] = to
  //}
   
    return(true)
 
 }

  findBeginningX(y, x, NewSpace){
   
    if(nestedArray[verticalCursorPosition/10][WIDTH-1] === '-'){

      return
    }

    for (let x = 0; x < WIDTH-1; x++){
      //get last space or, '-'
      if (nestedArray[verticalCursorPosition/10][x] === '-' || nestedArray[verticalCursorPosition/10][x] === ' ')
    
      console.log("G:", this.indexOfXForLineBeforeLastRowSpace)
      this.indexOfXForLineBeforeLastRowSpace = x;

    }
    return;

    if(NewSpace === true){
      this.indexOfXForLineBeforeLastRowSpace = x
      this.IsFirstCharacterPos = x;
      console.log("E:", x)
      console.log("I: ",this.indexOfXForLineBeforeLastRowSpace )
    }else{
      //alert("here");
      //this.indexOfXForLineBeforeLastRowSpace++;
      if(this.indexOfXForLineBeforeLastRowSpace > WIDTH-1){
        this.indexOfXForLineBeforeLastRowSpace = 0;
      }
      console.log("H: ",this.indexOfXForLineBeforeLastRowSpace )
    }

      console.log("WIDTH:", WIDTH, "A:", this.indexOfXForLineBeforeLastRowSpace)
        if(x === WIDTH - 1)
        {
          if(nestedArray[verticalCursorPosition/10][x] == "-"){
            return false;
          }
          //alert("width");
           this.RemoveBeforeWidth = true;
            return true;
        }
        return false;
      }
    //if there is a space than start capturing text, unless another space than start capture again
    //get start position
    //if the last position is filled than begin insert word on next line and push the line over to next row
    //end insert on first space or null
    //inserts a character into array 
    insertCharacter() {
        //I need to stringfy and parse to copy the value
        //if you do tempArray = nestedArray it creates a reference
        //which means modify temp modifies the original
        //we want them to keep them seperate for the shift
      let tempArray = JSON.parse(JSON.stringify(nestedArray));
      let GotWordAllready = false
      let maxX = WIDTH;
      let maxY = HEIGHT;
      let currentIndex = {
          y: verticalCursorPosition/10,
          x: horizontalCursorPosition/5
      }
       let justWasASpace = true
       let currentColumn = verticalCursorPosition/10
       //only inserts to next column
       this.RemoveBeforeWidth = false
        for(let y = 0; y <= currentColumn + 1; y++){
         // alert(currentColumn)
          for(let x = 0; x < maxX; x++){
              if(y <= currentIndex.y && x <= currentIndex.x - 1){
              } else if( y <= currentIndex.y -1 ){
              }else {
                  let {nextY, nextX} = this.getNextTarget(y,x);
                  
                  //console.log(x,y, nestedArray[x][y], "==>", nextX, nextY,  tempArray[nextX][nextY] );
                  let newValue = nestedArray[y][x];
                  tempArray[nextY][nextX] = newValue;
                  
                  
                  if (newValue === '-'){
                    justWasASpace = true;
                  }else{
                    //alert("else");
                    justWasASpace = false
                  }
                  if(y === verticalCursorPosition/10){
                    console.log("else2")
                  let InsertWordToArray = this.findBeginningX(y,x, justWasASpace)
                  }
              }
          }
      }
    //this.IsFirstCharacterPos = ""
    nestedArray = [...tempArray];
    nestedArray[currentIndex.y][currentIndex.x] =  gKey;
    //if(this.RemoveBeforeWidth === true){
      console.log("!: ", nestedArray[verticalCursorPosition/10][WIDTH-1]);
    if(nestedArray[verticalCursorPosition/10][WIDTH-1] !== '-'){
      alert("rw");
    this.removeWord(0)
    }
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
  