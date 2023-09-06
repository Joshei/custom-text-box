//horizontal increment:  5.
//vertical increment is 10.

class ReturnClass {
  constructor () {
    this.lastLine = 0
    this.firstTimeThrough = true
    let holdsTextToMove = []
  }

  removeCharactersOnRightOnActiveLine() {
    
    //alert('1')
    for (let x = horizontalCursorPosition / 5; x < WIDTH; x++) {
      if (nestedArray[verticalCursorPosition/10][x] === '-') {
        return
      }
      console.log('*: ', x)
      nestedArray[verticalCursorPosition / 10][x] = 'A'
    }
  }

  Return() {
    //on first push - iterates number of characters from zero to cursor
    let amtCharactersToRight = horizontalCursorPosition / 5 - 1

    if (gLastLine == HEIGHT) {
      
      alert("28");
      return
    }

    let i = 1

    ///////////

    let index = 0
    for (let x = 0; x < WIDTH; x++) {
      holdsTextToMove[0][x] = ' '
    }
    //code to hold moved text (after cursor)
    //for (let y = 0; y < HEIGHT; y++)
    for (let x = horizontalCursorPosition / 5; x < WIDTH; x++) {
      index++
    }

    ///////////

    //initial charctar for use with return when it is on first character (different implementation)
    let initialCharacter = ''

    let tempArray = JSON.parse(JSON.stringify(nestedArray))

    let heightX = 0

    console.log({ nestedArray })
    let breakFlag = false

    var xAdjuster = horizontalCursorPosition / 5;
    var y = verticalCursorPosition / 10
   


    


    //push everything down starting on line after current vertical position
    for (let y = (verticalCursorPosition / 10); y < HEIGHT - 1; y++) {
      
      console.log("2a: ", xAdjuster);
      
      if (y >=( verticalCursorPosition/10 + 1)) {
        xAdjuster = 0;
        console.log("2b: ", xAdjuster);

        
      }
     
        
      
      for (let x = xAdjuster; x < WIDTH; x++) {
        console.log("3: ", x);
        if (nestedArray[y][x] === '-') {
          //breakFlag = true;
          //break
        }

        //console.log('!!: ', nestedArray)



        
        let newValue = nestedArray[y][x] // sets 10 times
        console.log({ newValue })
        tempArray[y + 1][x] = newValue
      }
      //if (breakFlag == true) {
        //break
      }
    
      
    

    nestedArray = [...tempArray]
    //console.log({ nestedArray })
    this.removeCharactersOnRightOnActiveLine()

    drawGrid()

    this.lastLine = this.lastLine + 1

    gLastLine++

    //advances vertical position to next row where cursor will be
    verticalCursorPosition = verticalCursorPosition + 10

    //drawGrid;

    CursorMovements.drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    )
  }
}
