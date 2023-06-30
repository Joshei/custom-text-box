
// Controls key presses.
class CustomBoxClass {
    constructor() {
      drawGrid()
      CursorMovements.drawCursor(25, 25)
      gInsert = false;
    }

  controlInput() {
      

    if (gKey == 'Shift' || gKey == 'Control' || gKey == 'Tab' || gKey == 'Escape' || gKey == 'Backspace'){
    
      return;
    }

    


    if (gKey == 'Insert') {
      gInsert = !gInsert

      if (gInsert) {
        insertOn.innerHTML = 'Insert On'
      } else {
        insertOn.innerHTML = 'Insert Off'
      }
  
      return;
    }
    

    

    if (gKey == 'Delete') {

      deleteIt();
    }

      else if (gKey == 'ArrowLeft') {
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
        console.log("key: ", gKey);
        Insert.makeOneDimArray()
        Insert.insertCharacter()
      printCharacter()
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
  
