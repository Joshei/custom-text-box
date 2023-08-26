
// Controls key presses.
class CustomBoxClass {
    constructor() {
      drawGrid()
      CursorMovements.drawCursor(25, 25)
      gInsert = false;
    }

  controlInput() {
      
    console.log("gkey",gKey);
    if (gKey == 'Shift' || gKey == 'Control' || gKey == 'Tab' || gKey == 'Escape' || gKey == 'Backspace'){
    
      return;
    }

    


    if (gKey ==  'Insert') {
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
      } else {
        
      //Insert.makeOneDimArray()
      
     
        Insert.insertCharacter()
        
    }
    
      //dispalys x and y for testing
      xAndY.innerHTML =
        'X: ' +
        (horizontalCursorPosition/5) +
        '  &nbsp&nbsp&nbsp   Y: ' +
      (verticalCursorPosition/10 )
    
      
    }
}
  
