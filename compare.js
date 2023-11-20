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
 
  //FILL ONE VALUE RIGHT OF COPIED MOVESTRING WITH Ys FOR NOW
  fillMovedStringWithYs(yValue) {
    
    console.log("0:", nestedArray);
    console.log("C:", this.indexOfXForLineBeforeLastRowSpace);
    for (let x = this.indexOfXForLineBeforeLastRowSpace; x < WIDTH  ; x++) {
      ///////////////
      nestedArray[yValue][x] = "Y";
    }
    console.log("0:", nestedArray);
    //alert("1");
  }

  
  removeWordAndWriteRowsAfter(yValue) {

    
    console.log({nestedArray});
    
    
    //WHEN LAST CHARACTER IS NO LONGER, "-" ON THE NEXT KEYPRESS FIND WAY TO CODE
    if (
      nestedArray[yValue][WIDTH - 1] === "-" 
     
       
    ) {
     
      alert("0");
      this.YCounterArray[yValue] = 0;
      return;
    }

    this.YCounterArray[yValue]++; 
    alert("1");
    
    if(this.YCounterArray[yValue] == 1)
    {
      alert("2");
      return
    }

    
    
    let x2 = 0;

    alert("3");
    
    //CREATE STRING OF CHARACTERS THAT ARE TO BE REMOVED FROM CURRENT ROW
    console.log("A:", this.indexOfXForLineBeforeLastRowSpace);
    
    for (let x = this.indexOfXForLineBeforeLastRowSpace ; x < WIDTH; x++) {
      let element = nestedArray[yValue][x];
      this.toMoveString[x2] = element;
      x2++;
    }
    console.log("2: ", this.toMoveString);
    console.log("3:", this.indexOfXForLineBeforeLastRowSpace);
    console.log("AA:", nestedArray);
    console.log({yValue});
    //FILL ONE CHRACTER AFTER STRING TO BE MOVED WITH CHARACTER, Y.
    this.fillMovedStringWithYs(yValue);

    //----------------------------------------------
    
    
    let index = 0;
    for(let i = 0; i < WIDTH ; i++){

      //FIND TOTAL OF, '-' AT END OF STRING TO BE FOR CACULATION OF LENGTH OF STRING TO BE MOVED 
      if (this.toMoveString[i] === '-'){
        index++

      }
     
    }
    let  IndexOfLength = (WIDTH-1) - index
    let counter = 1
    

    
    //COPY OF NESTED ARRAY
    for(let x = 0; x<WIDTH; x++){
    for(let y = 0; y<HEIGHT-2; y++){

      
      copyNestedArray1[y][x] = nestedArray[y][x]
     }
    }


    //put all rows one row down, start on movestring row
    //PUT ALL ROWS ONE ROW DOWN STARTING WITH NEXT ROW BEFORE 
    for(let x = 0; x<WIDTH; x++){
    
    //move down row after row with word to move.  Keep that filled to put moved word there with no other characters
    //Lower all rows beneath string where moved string goes.  Do this by one row.
    //put move string at beginning of array after
      
    //y is set at row to put movestring 
    for(let y = verticalCursorPosition/10 ; y < HEIGHT-2; y++){
        let element = copyNestedArray1[y+1][x]
        //leaves row after current for putting juse moved word there and rmoeve all other text.
        nestedArray[y+2][x] = element
      }
    }

    
    
    
    
    
    //add movestring to array at one row beneath current row 
    for (let x = 0 ; x < IndexOfLength ; x++) {
      
        let element = this.toMoveString[IndexOfLength - counter];
        nestedArray[verticalCursorPosition/10+1][x] = element;
        
        counter++
      
    }

    //put nulls in nestedarray after the above row where toMoveString has been placed.
    //All rows starting on this row were pushed down a roe
    console.log("5:", nestedArray);
    
    let lengthOfMovedWord = IndexOfLength + 1;
    console.log({lengthOfMovedWord});
    for (let x = lengthOfMovedWord-1 ; x < WIDTH-1 ; x++) {
      
      nestedArray[verticalCursorPosition/10+1][x] = 'Z';
      }
    


  
  }

  findBeginningX(y) {
    
    //find the index value of the last value ,"-" of the string"
  this.indexOfXForLineBeforeLastRowSpace = 0
    for (let x = 0; x < WIDTH; x++) {
      if (nestedArray[y][x] === "-") {
        
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
     

      console.log({nestedArray});
      let i = 0;
      //this is preventing last column of, '-' to be pushed to next row
      for (let x = 0; x < maxX-1; x++) {
        i++;
        console.log({i})
        if (y <= currentIndex.y && x <= currentIndex.x - 1) {
          
        } else if (y <= currentIndex.y - 1) {
        } else {
          let { nextY, nextX } = this.getNextTarget(y, x);

         
          let newValue = nestedArray[y][x];
          console.log("10A: ", tempArray);
          tempArray[nextY][nextX] = newValue;
        }
      }
   
   
    nestedArray = [...tempArray];
    
    nestedArray[currentIndex.y][currentIndex.x] = gKey;

    
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
