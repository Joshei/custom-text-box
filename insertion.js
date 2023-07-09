

class InsertClass {


 
    //inserts a character into array using splice (the reason for one dim array conversion)
    insertCharacter() {
        console.log('2: ', oneDimArray)

        alert("1");

        oneDimArray.splice(
          

          verticalCursorPosition*(HEIGHT / 10)+ horizontalCursorPosition/5  ,

          0,
          gKey
        )

        console.log('h: ', horizontalCursorPosition)
        console.log('v: ', verticalCursorPosition)
        console.log('3: ', oneDimArray)
        this.makeTwoDimArrayWithInsertion()
    }
    

   
      makeTwoDimArrayWithInsertion() {
        //rows

        let z0 = 0;
        for (let i = 0; i < HEIGHT; i = i + 1) {
          //columns
          for (let j = 0; j < WIDTH; j = j + 1) {
           // alert("hi: ", z0);
            console.log("hi: ", z0);
            nestedArray[i][j] = oneDimArray[z0]
            z0++
          }
        }

        console.log('4: ', oneDimArray)
        console.log('5: ', nestedArray)
        

        drawGrid()
        CursorMovements.drawCursor(
          horizontalCursorPosition + HOFFSET,
          verticalCursorPosition + VOFFSET
        )


        alert("2");

        //this.findWords();
      }

      
    //turn two dimensional array into one dimensional array
    makeOneDimArray() {
        for (let i = 0; i < HEIGHT; i = i + 1) {
          //rows
          for (let j = 0; j < WIDTH; j = j + 1) {
            oneDimArray.push(nestedArray[i][j])
          }
      }
      
      alert("3");

    }
    


      //last word
      //word's x start
      //word's x end
    
    
   



         
        

}
      

