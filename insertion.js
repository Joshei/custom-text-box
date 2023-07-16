

class InsertClass {


 
    //inserts a character into array using splice (the reason for one dim array conversion)
    insertCharacter() {
        

      
      //turn two dimensional array into one dimensional array
      //this.makeOneDimArray();
     
      console.log('2Z: ', oneDimArray)
      console.log('2X: ', nestedArray)
      


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
           
            console.log("hi: ", z0);
            nestedArray[i][j] = oneDimArray[z0]
            z0++
          }
        }

        console.log('4: ', oneDimArray)
        console.log('5: ', nestedArray)
        

        drawGrid()

        
        horizontalCursorPosition = horizontalCursorPosition + 5; 
        if (((horizontalCursorPosition/5) % (WIDTH )) === 0)
        {
          alert("!");
          verticalCursorPosition = verticalCursorPosition + 10;
          horizontalCursorPosition = 0;
        }

        //alert("2: ",horizontalCursorPosition)
        //alert("1: ",verticalCursorPosition)
        CursorMovements.drawCursor(
          horizontalCursorPosition + HOFFSET,
          verticalCursorPosition + VOFFSET
        )


        

        //this.findWords();
      }

      
    //turn two dimensional array into one dimensional array
    makeOneDimArray() {
      
      let z0 = 0;
  
      for (let i = 0; i < HEIGHT; i = i + 1) {
        //rows
        for (let j = 0; j < WIDTH; j = j + 1) {
          oneDimArray[z0] = nestedArray[i][j]
            z0++
        }
      }
      
      
  
}
  

    


      //last word
      //word's x start
      //word's x end
    
    
   



         
        

}
      

