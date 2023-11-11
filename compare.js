// 10/20/23 - from moveRemoveWord 
// Check for all cases of data transfer to next line, set up all Y loops, and work multiple border line cases 
//10/11/23 - put three characters on right than one on left.  Next turn put another a on left.  Line 231, WIDTH is WIDTH-1 
class InsertClass {
  constructor() {
    this.indexOfXForLineBeforeLastRowSpace = 0;
    //this.StartedCapture = false;
    //this.GotWordAllready = true;
    //this.InsertWordToArray = false;
    //this.IsFirstCharacterPos = 5;
    //this.RemoveBeforeWidth = false;
    //this.FlagWordRemoved = false;
    this.counter = false;
    this.skipThisFunction = false;
    this.skipSecondFunction = false;
    this.skipThirdFunction = false;
    this.toMoveString = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.copyOfY = 0;
    this.YCounter = 0;
    this.YCounterArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  makeTwoDimArrayWithInsertion() {
    //alert("1");
    //rows
    for (let i = 0; i < HEIGHT; i = i + 1) {
      //columnsjavascript s
      for (j = 0; j < WIDTH; j = j + 1, z++) {
        nestedArray[i][j] = oneDimArray[z];
      }
    }
    z = 0;
    drawGrid();
    CursorMovements.drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
  }
  //turn two dimensional array into one dimensional array
  makeOneDimArray() {
    for (let i = 0; i < HEIGHT; i = i + 1) {
      //rows
      for (let j = 0; j < WIDTH; j = j + 1) {
        oneDimArray.push(nestedArray[i][j]);
      }
    }
    console.log("#A ", nestedArray);
  }

  getNextTarget(y, x) {
    let nextX = x,
      nextY = y;
    if (x === WIDTH - 1 && y === HEIGHT - 1) {
    } else if (x === WIDTH - 1) {
      nextX = 0;
      nextY = y + 1;
      
    } else {
      nextX = x + 1;
    }
    return {
      nextY,
      nextX,
    };
  }

  //put removeword at top, when called set flag to leave insert in removeword

  //console.log("A:", this.indexOfXForLineBeforeLastRowSpace)
  //console.log("here: ", verticalCursorPosition/10);
  //console.log("B:", y)
  //console.log("x:", x, "y: ", y);

  //copy nested array

  /* copyArray() {
    for (let y = 0; y < HEIGHT; y++) {
      for (let x = 0; x < WIDTH; x++) {
        let element = nestedArray[y][x];
        copyNestedArray[y][x] = element;
      }
    }
  } */
 
  //fill after indexOfXForLineBeforeLastRowSpace with spaces - Y for now
  fillMovedStringWithYs(yValue) {
    
    console.log("0:", nestedArray);
    console.log("C:", this.indexOfXForLineBeforeLastRowSpace);
    for (let x = this.indexOfXForLineBeforeLastRowSpace; x < WIDTH  ; x++) {
      ///////////////
      nestedArray[yValue][x] = "S";
    }
    console.log("0:", nestedArray);
    //alert("1");
  }

  /* ///rewrite array after inserted movestring
  rebuildArrayWithMoveString(lengthOftoMoveString) {
    console.log("1Y:", nestedArray);
    let x1 = lengthOftoMoveString - 1;
    //for (let y = 0; y < HEIGHT - 1; y++) {
    let y = 0;  
    for (let x = 0; x < WIDTH; x++) {
        let element = copyNestedArray[y+1][x];
        nestedArray[y+1][x1] = element;
        x1++;
      }
      //subtracts to zero
      
    //}
    console.log("1X:", nestedArray);
    console.log("1Z:", this.toMoveString);
  }
 */
  
  removeWordAndWriteRowsAfter(yValue) {

    //let yValue = verticalCursorPosition / 10;
    //for (let yValue = verticalCursorPosition/10; yValue< HEIGHT-1 ; yValue++ ){
    console.log({nestedArray});
    
    
    // -a-------
    // a
    if (
      nestedArray[yValue][WIDTH - 1] === "-" 
      //||
      //nestedArray[yValue][WIDTH - 1] === "Y"
       
    ) {
      //alert("-!");
      //alert("1");
      this.YCounterArray[yValue] = 0;
      return;
    }

    //(pur char on last position)if here with no alert 1 than character is pushed to next column first
    //next character will push letter off row and return to first if than
    this.YCounterArray[yValue]++; 
    //alert("2");
    
    if(this.YCounterArray[yValue] == 1)
    {
      //alert("3");
      return
    }

    //if (this.indexOfXForLineBeforeLastRowSpace == 8){
    //  
    //}
    
    let x2 = 0;

    //alert("4");
    
    //build movestring
    console.log("A:", this.indexOfXForLineBeforeLastRowSpace);
    
    for (let x = this.indexOfXForLineBeforeLastRowSpace ; x < WIDTH; x++) {
      let element = nestedArray[yValue][x];
      this.toMoveString[x2] = element;
      x2++;
    }
    console.log("2: ", this.toMoveString);
    console.log("3:", this.indexOfXForLineBeforeLastRowSpace);
    console.log("AA:", nestedArray);
    this.fillMovedStringWithYs(yValue);

    //----------------------------------------------
    //place movestring into array
    //let length = toMoveString.length;

    //find length of string  - FIX THIS SO ABORT IF MOVETEXT.LENGHT == 0, CHECK LAST CHARACTER, OK? and FIX ONLY LAST CHARACTER, WORKS THOUGH
    let indexOfLength = 0;
    for(let i = 0; i < WIDTH ; i++){

      if (this.toMoveString[i] === '-'){
        break;

      }
      indexOfLength++;
    }



    ////////////////////////////
    let lengthIndex = indexOfLength;
    let counter = 1
    

    
    //backup copy of nestedArray
    for(let x = 0; x<WIDTH; x++){
    for(let y = 0; y<HEIGHT-2; y++){

      //in index1.html
      copyNestedArray1[y][x] = nestedArray[y][x]
     }
    }


    //put all rows one row down, start on movestring row
    for(let x = 0; x<WIDTH; x++){
    
    //move down row after row with word to move.  Keep that filled to put moved word there with no other characters
    //Lower all rows beneath string where moved string goes.  Do this by one row.
    //put move string at beginning of array after
      for(let y = verticalCursorPosition/10+1 ; y < HEIGHT-1; y++){
        let element = copyNestedArray1[y][x]
        //leaves row after current for putting juse moved word there and rmoeve all other text.
        nestedArray[y+1][x] = element
      }
    }

    //add movestring to array at one row beneath current row 
    for (let x = 0 ; x <= lengthIndex ; x++) {
      
        let element = this.toMoveString[lengthIndex - counter];
        nestedArray[yValue+1][x] = element;
        
        counter++
      
    }

    //put nulls in nestedarray after the above row where toMoveString has been placed.
    //All rows starting on this row were pushed down a roe
    console.log("5:", nestedArray);
    
    let lengthOfMovedWord = indexOfLength + 1;
    console.log({lengthOfMovedWord});
    for (let x = lengthOfMovedWord-1 ; x < WIDTH-1 ; x++) {
      
      nestedArray[verticalCursorPosition/10+1][x] = 'Z';
      }
    


  
  }

  findBeginningX(y) {
    
    // alert("find");
    //if (nestedArray[y][WIDTH - 1] === "-") {
    //  return;
    //}
    //index one before, so width-1
    for (let x = 0; x < WIDTH; x++) {
      if (nestedArray[y][x] === "-") {
        //|| nestedArray[verticalCursorPosition/10][x] === 'Y')

        //because the index is for a string that advances one space to right and goes to next row
        console.log("G:", this.indexOfXForLineBeforeLastRowSpace);
       
        this.indexOfXForLineBeforeLastRowSpace = x + 1 ;
      }
    }
    console.log("X:", nestedArray);
    return;
  }

 
  insertCharacter() {
    //this.skipThisFunction = false;
    //this.skipSecondFunction = false;

    this.FlagWordRemoved = false;
    //I need to stringfy and parse to copy the value
    //if you do tempArray = nestedArray it creates a reference
    //which means modify temp modifies the original
    //we want them to keep them seperate for the shift
    let tempArray = JSON.parse(JSON.stringify(nestedArray));
    let GotWordAllready = false;
    let maxX = WIDTH;
    let maxY = HEIGHT;
    let currentIndex = {
      y: verticalCursorPosition / 10,
      x: horizontalCursorPosition / 5,
    };
    let justWasASpace = true;
    let currentColumn = verticalCursorPosition / 10;

    //only inserts to next column
    this.RemoveBeforeWidth = false;

      let y = verticalCursorPosition/10;
      //for (let y = 0; y <= currentColumn + 1; y++) {

      console.log({nestedArray});
      let i = 0;
      //this is preventing last column of, '-' to be pushed to next rowa
      for (let x = 0; x < maxX-1; x++) {
        i++;
        console.log({i})
        if (y <= currentIndex.y && x <= currentIndex.x - 1) {
        } else if (y <= currentIndex.y - 1) {
        } else {
          let { nextY, nextX } = this.getNextTarget(y, x);

          //console.log(x,y, nestedArray[x][y], "==>", nextX, nextY,  tempArray[nextX][nextY] );
          let newValue = nestedArray[y][x];
          console.log("10A: ", tempArray);
          tempArray[nextY][nextX] = newValue;
        }
      }
    //}
   
    nestedArray = [...tempArray];
    //MODIFIED
    nestedArray[currentIndex.y][currentIndex.x] = gKey;

    /*
    console.log("10: ", nestedArray);
   
    if(this.copyOfY != verticalCursorPosition/10){
      this.skipThisFunction = false;
      this.skipThirdFunction = false;
      this.skipThisFunction = false;
      alert("not")

    }
    this.copyOfY = verticalCursorPosition/10
          
    
    if(this.skipThisFunction == false && this.skipThirdFunction == false){
         
            if(nestedArray[verticalCursorPosition/10][WIDTH-1] === '-'){
            this.drawGridAndCursor()
            this.skipThisFunction = true;
            alert("1a")
            return;
          }
        }
          console.log("3z: ", this.counter);
          if(this.skipThisFunction == true && this.skipSecondFunction  === false && nestedArray[verticalCursorPosition/10][WIDTH-1] != '-'){
            this.drawGridAndCursor()
            this.skipSecondFunction = true;
            alert("2a");
            return
          }

          alert("3a");
 */
  console.log("*:", nestedArray);
  //needs y
  let yValue = verticalCursorPosition/10;
  
  while(yValue<6){
  this.findBeginningX(yValue);
  // once every y
  
  this.removeWordAndWriteRowsAfter(yValue);
  yValue++;
  }
  //this.skipThisFunction = false;
  //this.skipSecondFunction = false;
  //this.skipThirdFunction = false;

    console.log("!: ", nestedArray[verticalCursorPosition / 10][WIDTH - 1]);

    if(nestedArray[verticalCursorPosition/10][horizontalCursorPosition/5] == '-'){
      //alert("1");
    } 

    this.drawGridAndCursor()
  } //end of insertion function

  drawGridAndCursor(){
    drawGrid();
    horizontalCursorPosition = horizontalCursorPosition + 5;
    if ((horizontalCursorPosition / 5) % WIDTH === 0) {
      //alert("!");
      verticalCursorPosition = verticalCursorPosition + 10;
      horizontalCursorPosition = 0;
    }
    //alert("2: ",horizontalCursorPosition)
    //alert("1: ",verticalCursorPosition)
    CursorMovements.drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
  }
}
