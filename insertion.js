

class InsertClass {


    x(){

    }

    //inserts a character into array using splice (the reason for one dim array conversion)
    insertCharacter() {
        console.log('2: ', oneDimArray)

        //oneDimArray.splice((horizontalCursorPosition/5+35  ),0, 'Z');
        oneDimArray.splice(
          //horizontalCursorPosition / 5 + (10 * verticalCursorPosition) / 10,

          verticalCursorPosition + horizontalCursorPosition/5,

          0,
          gKey
        )

        console.log('h: ', horizontalCursorPosition)
        console.log('v: ', verticalCursorPosition)
        console.log('3: ', oneDimArray)
        this.makeTwoDimArrayWithInsertion()
    }
    

    z = 0 ;
      makeTwoDimArrayWithInsertion() {
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
    makeOneDimArray() {
        for (let i = 0; i < HEIGHT; i = i + 1) {
          //rows
          for (let j = 0; j < WIDTH; j = j + 1) {
            oneDimArray.push(nestedArray[i][j])
          }
        }
}
      
      

}