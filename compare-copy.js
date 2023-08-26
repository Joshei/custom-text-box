class InsertClass {
  constructor () {
    this.gNullCharacterNotFound = false
  }
  z = 0
  makeTwoDimArrayWithInsertion () {
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
  makeOneDimArray () {
    for (let i = 0; i < HEIGHT; i = i + 1) {
      //rows
      for (let j = 0; j < WIDTH; j = j + 1) {
        oneDimArray.push(nestedArray[i][j])
      }
    }
    console.log('#A ', nestedArray)
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

  
  ////////////////////////////////
  // yToCheck = y;
  // xToCheck = x  //if last character is null, return out, otherwise insert pushes to followingThanks  row.
  // otherwise start insert next row
  
  
//  getNextTarget(x, y) {
//    //on last character of line - so we insert the next line until the final check
//    /* if (x % WIDTH == 1) {
//      if (nestedArray[y][x] == "") {
//        return
//      }
//    }
//    */
//    //console.log('gnt: ', x, WIDTH)
//    let nextX = x,
//      nextY = y
//    //nextX = x + 1;
//    //console.log('width: ', WIDTH)
//    //console.log('x: ', x)
//    if (x === WIDTH - 1 && y === HEIGHT - 1) {
//    } else if (x === WIDTH - 1) {
//      //alert("here");
//      nextY = y + 1
//      nextX = 0
//    } else {
//      nextX = x + 1
//    }
//    return {
//      nextY,
//      nextX
//    }
//  }
  ////////////////////////////////
  
  getNextTarget(x,y){
    let nextX = x, nextY = y;
    if(y === this.maxY -1 && x === this.maxX -1){


    } else if(y === this.maxY -1){
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
  

  

  //inserts a character into array
  insertCharacter () {
    for (let i = 0; i < 10; i++) {
      //console.log('test1 ', i)
    }
    for (let i = 0; i <= 10 - 1; i++) {
      //console.log('test2 ', i)
    }
    //I need to stringfy and parse to copy the value
    //if you do tempArray = nestedArray it creates a reference
    //which means modify temp modifies the original
    //we want them to keep them seperate for the shift
    //console.log('na1: ', nestedArray)
    let tempArray = JSON.parse(JSON.stringify(nestedArray))
    let maxY = HEIGHT
    let maxX = WIDTH
    let currentIndex = {
      y: verticalCursorPosition / 10,
      x: horizontalCursorPosition / 5
    }
    //gNullCharacterFound = false;
    let counter = 0
    let breakFlag = false

    ////////////////////////////////

    for (let y = 0; y < maxY; y++) {
      for (let x = 0; x < maxX; x++) {
        //breaks out
        //CHANGED
        //if(x <= currentIndex.x - 1 && y <= currentIndex.y - 1){

        if (y < currentIndex.y) {
          console.log('????', 'y:', y, 'x:', x, currentIndex.y, currentIndex.x)
        }
        //leave text alone so that it will stay in temp array
        else if (x < currentIndex.x) {
          console.log('????', 'y:', y, 'x:', x, currentIndex.y, currentIndex.x)
        } else {
          let { nextY, nextX } = this.getNextTarget(x, y)
          //console.log("1!: ", x,y, nestedArray, "==>", nextX, nextY,  tempArray );
          let newValue = nestedArray[y][x]
          tempArray[nextY][nextX] = newValue
          console.log('value: ', newValue)
        }
      }

      ////////////////////////////////

      //console.log("cl1: ", x % (WIDTH-2) === 1);
      //if (nestedArray[y][WIDTH-2] === ''  && (x % (WIDTH-2) === 1)) {
      //    if(nestedArray[y][x] = ''){
      //    breakFlag = true
      //      counter++
      //alert("broke out1");
      //      break;
      //}

      if (breakFlag === true) {
        //alert("broke out2");
        //  break;
      }
    }
    nestedArray = [...tempArray]
    console.log('1', nestedArray)
    console.log(2, gKey)
    console.log(3, currentIndex.y, currentIndex.x)

    nestedArray[currentIndex.y][currentIndex.x] = gKey
    console.log('ci: ', currentIndex.x)

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
    horizontalCursorPosition = horizontalCursorPosition + 5
    if ((horizontalCursorPosition / 5) % WIDTH === 0) {
      verticalCursorPosition = verticalCursorPosition + 10
      horizontalCursorPosition = 0
    }
    //alert("2: ",horizontalCursorPosition)
    //alert("1: ",verticalCursorPosition)
    CursorMovements.drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    )
    //alert("here2");
  } //end of insertion function
}
