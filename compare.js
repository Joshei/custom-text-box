// 10/20/23 - from moveRemoveWord 
// WHEN TARGET IS RUN, SET A FLAG FOR SITUATION WHEN CHARACTER ADVANCE TO FIRST POSITION OF NEXT ROW
// FLAG PERMITS YS TO BE PLACED BY ALLOWING removeWordAndWriteRowsAfter() AND findBeginningX(y, x) TO WORK

class InsertClass {
  constructor() {
    this.indexOfXForLineBeforeLastRowSpace = 0;
    this.StartedCapture = false;
    this.GotWordAllready = true;
    this.InsertWordToArray = false;
    this.IsFirstCharacterPos = 5;
    this.RemoveBeforeWidth = false;
    this.FlagWordRemoved = false;
    this.counter = false;
    this.skipThisFunction = false;
    this.skipSecondFunction = false;
    this.skipThirdFunction = false;
    this.toMoveString = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
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
  fillMovedStringWithYs() {
    
    console.log("0:", nestedArray);
    console.log("C:", this.indexOfXForLineBeforeLastRowSpace);
    for (let x = this.indexOfXForLineBeforeLastRowSpace; x < WIDTH  ; x++) {
      ///////////////
      nestedArray[verticalCursorPosition / 10][x] = "Y";
    }
    console.log("0:", nestedArray);
    //alert("1");
  }

  /* //rewrite array after inserted movestring
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
  
  removeWordAndWriteRowsAfter() {

    let yValue = verticalCursorPosition / 10;
    //for (let yValue = verticalCursorPosition/10; yValue< HEIGHT-1 ; yValue++ ){
    if (
      nestedArray[yValue][WIDTH - 1] === "-" ||
      nestedArray[yValue][WIDTH - 1] === "Y"
    ) {
      return;
    }
    //alert("1");
    
    
    let x2 = 0;

    
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
    this.fillMovedStringWithYs();

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
    
    //let moveStringIndex = 0
    for (let x = 1 ; x <= lengthIndex ; x++) {
      //fill nestedarray with characters moved
      //if unmoveable than the content will be unchaged, '-'
      //if (this.toMoveString[lengthIndex] != "-") {
        let element = this.toMoveString[lengthIndex - counter];
        nestedArray[verticalCursorPosition / 10+1][x] = element;
        //lengthIndex--;
        counter++
       // moveStringIndex++
      
      //}
    }
    console.log("5:", nestedArray);
    //this.copyArray();
    //this.rebuildArrayWithMoveString(lengthIndex);
  }

  findBeginningX(y, x) {
    
    // alert("find");
    //if (nestedArray[y][WIDTH - 1] === "-") {
    //  return;
    //}
    //index one before, so width-1
    for (let x = 0; x < WIDTH-1; x++) {
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

    //this.removeWordAndWriteRowsAfter(0)
    //if(this.FlagWordRemoved == false){

    for (let y = 0; y <= currentColumn + 1; y++) {
      for (let x = 0; x < maxX; x++) {
        //   if(x == currentIndex.x ){
        //     console.log("branch 1")
        //   }
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
    }
   
    nestedArray = [...tempArray];
    //MODIFIED
    nestedArray[currentIndex.y][currentIndex.x] = gKey;

    console.log("10: ", nestedArray);
   
          if(this.skipThisFunction == false && this.skipThirdFunction == false){
         
            if(nestedArray[verticalCursorPosition/10][WIDTH-1] === '-'){
            this.drawGridAndCursor()
            this.skipThisFunction = true;
            //alert("1a")
            return;
          }
        }
          console.log("3z: ", this.counter);
          if(this.skipThisFunction == true && this.skipSecondFunction  === false && nestedArray[verticalCursorPosition/10][WIDTH-1] != '-'){
            this.drawGridAndCursor()
            this.skipSecondFunction = true;
            //alert("2a");
            return
          }
 
  console.log("*:", nestedArray);
  //needs y
  this.findBeginningX(0, x);
  // once every y
  
  this.removeWordAndWriteRowsAfter();
  //this.skipThisFunction = false;
  //this.skipSecondFunction = false;
  //this.skipThirdFunction = false;

    console.log("!: ", nestedArray[verticalCursorPosition / 10][WIDTH - 1]);

    if(nestedArray[verticalCursorPosition/10][horizontalCursorPosition/5] == '-'){
      alert("1");
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
