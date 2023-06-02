

function CursorClass() {

this.cursorLeft = function() {
        horizontalCursorPosition = horizontalCursorPosition - 5

        //Ready to move up one row

        if (horizontalCursorPosition == -5) {
          
          
          verticalCursorPosition = verticalCursorPosition - 10

          
          
          //row 1, here because you can't divide by zero
          if (verticalCursorPosition == 0) {
            //last column
            horizontalCursorPosition = 34 * 5

            //move cursor to first character to the left
            for (let i = horizontalCursorPosition; i >= 0; i--) {
              if (nestedArray[0][i] == '') {
                horizontalCursorPosition = horizontalCursorPosition - 5
              }
            }
            //move cursor up a row
            horizontalCursorPosition = horizontalCursorPosition + 10
          }
          
          
          

          else {
            //move cursor to last column
            horizontalCursorPosition =  (WIDTH - 1)
            
            alert(horizontalCursorPosition);
            horizontalCursorPosition = horizontalCursorPosition * 5
          }
          alert(horizontalCursorPosition)

          //moves to first character not null, checks from right to left
          for (let i = horizontalCursorPosition; nestedArray[verticalCursorPosition / 10][horizontalCursorPosition / 5] == '';i--) {
            //alert("in");
            horizontalCursorPosition = horizontalCursorPosition - 5;
          }

          horizontalCursorPosition = horizontalCursorPosition + 5
        }

        xAndY.innerHTML =
          'X: ' +
          horizontalCursorPosition +
          '  &nbsp&nbsp&nbsp   Y: ' +
          verticalCursorPosition
        console.log('horiz ', horizontalCursorPosition)
        console.log('vert ', verticalCursorPosition)

        drawGrid(100, 100)
        //horizontalCursorPosition = horizontalCursorPosition + 5;

        CursorMovements.drawCursor(
          horizontalCursorPosition + HOFFSET,
          verticalCursorPosition + VOFFSET
        )
      }
      this.cursorRight = fucntion() {
        console.log('check', nestedArray[0][1])
        console.log(horizontalCursorPosition)
        console.log(verticalCursorPosition)

        console.log(
          nestedArray[verticalCursorPosition][horizontalCursorPosition / 5]
        )


        
       
        //moves to left until a null value is next character
        if (nestedArray[verticalCursorPosition/10][horizontalCursorPosition / 5] == '') {
          
          

          //break;
        } else {
          
          horizontalCursorPosition = horizontalCursorPosition + 5;

          


          //break;
        }

        drawGrid(100, 100)
          //horizontalCursorPosition = horizontalCursorPosition + 5;

          CursorMovements.drawCursor(
            horizontalCursorPosition + HOFFSET,
            verticalCursorPosition + VOFFSET
          )

     

      }

}

let Cursor = new CursorClass();