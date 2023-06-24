
// Controls key presses.
class CustomBoxClass {
    constructor() {
      drawGrid()
      CursorMovements.drawCursor(25, 25)
    }

  controlInput() {
      

    if (gKey == 'Shift' || gKey == 'Control' || gKey == 'Tab' || gKey == 'Escape'){
    
      return;
    }
      if (gKey == 'Insert') {
        gInsert = !gInsert

        if (gInsert) {
          insertOn.innerHTML = 'Insert On'
        } else {
          insertOn.innerHTML = 'Insert Off'
        }
      }
      if (gKey == 'ArrowLeft') {
        CursorMovements.cursorLeft()
      } else if (gKey == 'ArrowRight') {
        CursorMovements.cursorRight()
      } else if (gKey == 'ArrowUp') {
        CursorMovements.cursorUp()
      } else if (gKey == 'ArrowDown') {
        CursorMovements.cursorDown()
      } else if (gKey == 'Enter') {
        Return.Return()
      } else if (gInsert) {
        makeOneDimArray()
      } else {
        printCharacter()
      }
      //dispalys x and y for testing
      xAndY.innerHTML =
        'X: ' +
        horizontalCursorPosition +
        '  &nbsp&nbsp&nbsp   Y: ' +
        verticalCursorPosition
    }
  }