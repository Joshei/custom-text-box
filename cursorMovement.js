//For easy movement, especially useful for testing
class CursorMovementsClass {
    cursorRight() {
      //35 width times 5 to accomodate size of font's width
      if (horizontalCursorPosition >= 170) {
        //alert(horizontalCursorPosition);
        horizontalCursorPosition = 170
        return -1
      }

      drawGrid(100, 100)
      horizontalCursorPosition = horizontalCursorPosition + 5
      this.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }

    cursorLeft() {
      // console.log(horizontalCursorPosition);
      if (horizontalCursorPosition <= 0) {
        horizontalCursorPosition = 0
        return -1
      }

      drawGrid(100, 100)
      horizontalCursorPosition = horizontalCursorPosition - 5

      this.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorUp() {
      if (verticalCursorPosition <= 0) {
        verticalCursorPosition = 0
        return -1
      }
      drawGrid(100, 100)
      verticalCursorPosition = verticalCursorPosition - 10

      this.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )

      //gLastLine--;
    }
    cursorDown() {
      if (verticalCursorPosition >= 170) {
        verticalCursorPosition = 170
        return -1
      }

      drawGrid(100, 100)
      verticalCursorPosition = verticalCursorPosition + 10
      this.drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
  
      gLastLine++;
    }

    drawCursor(x, y) {
      ctx.font = '10px Monospace'
      ctx.fillStyle = 'red'
      ctx.fillText('_', x - 5, y)
  }
  
  
  }