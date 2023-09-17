
class ReturnClass {

  constructor () {
    this.lastLine = 0
    this.firstTimeThrough = true
    this.holdsTextToMove = []
  }

  removeCharactersOnRightOnActiveLine() {
    
    ///alert('1')
    for (let x = horizontalCursorPosition / 5; x < WIDTH-1; x++) {
      if (nestedArray[verticalCursorPosition/10][x] === '-') {
        return
      }
      console.log('*: ', x)
      nestedArray[verticalCursorPosition / 10][x] = 'A'
    }
  }

  Return() {
    
    
    let tempArray = JSON.parse(JSON.stringify(nestedArray))

    console.log({ nestedArray })
    let breakFlag = false

    var xAdjuster = horizontalCursorPosition / 5;
     y = verticalCursorPosition / 10

    //push everything down starting on line after current vertical position
    for (let y = (verticalCursorPosition / 10); y < HEIGHT - 1; y++) {
      //alert(y);
      console.log("2a: ", xAdjuster);
      
      for (let x = horizontalCursorPosition/5; x < WIDTH-1; x++) {
        console.log("3: ", x);
        if (nestedArray[y][x] === '-') {
          
        }

        if (y >=(( verticalCursorPosition/10) + 1)) {
          xAdjuster = 0;
          console.log("2b: ", xAdjuster );
  
          
        }
        if (breakFlag == true) {
        
       }


        let newValue = nestedArray[y][x] // sets 10 times
        console.log({ newValue })
        tempArray[y + 1][x-xAdjuster] = newValue
      }
      


      }
    
    nestedArray = [...tempArray]
    
    this.removeCharactersOnRightOnActiveLine()

    drawGrid()

    

    //advances vertical position to next row where cursor will be
    verticalCursorPosition = verticalCursorPosition + 10

    

    CursorMovements.drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    )
  }
}
