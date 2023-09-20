class ReturnClass {
  constructor () {
    this.lastLine = 0
    this.firstTimeThrough = true
    this.holdsTextToMove = []
  }
  
  removeCharactersOnRightOnActiveLine() {
    for (let x = horizontalCursorPosition / 5; x < WIDTH; x++) {
      if (nestedArray[verticalCursorPosition/10][x] === '-') {
        return
      }
      nestedArray[verticalCursorPosition / 10][x] = 'A'
    }
  }
  
  Return() {
    let tempArray = JSON.parse(JSON.stringify(nestedArray))
    let hp = horizontalCursorPosition/5
    //push everything down starting on line after current vertical position
    for (let y = (verticalCursorPosition / 10); y < HEIGHT - 1; y++) {
      for (let x = hp; x < WIDTH; x++) {
        if (tempArray[y][x] == '-') {
          break
        }
        let newValue = nestedArray[y][x] // sets 10 times
        console.log({ newValue })
        tempArray[y + 1][(x - (horizontalCursorPosition/5))] = newValue
      }
    hp = 0;  
    }
    nestedArray = [...tempArray]
    console.log("ta: " ,tempArray )
    console.log("na: ", nestedArray)
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
