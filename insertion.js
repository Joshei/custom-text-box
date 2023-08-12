

class InsertClass {


  z = 0 ;
  makeTwoDimArrayWithInsertion() {
        
    //alert("1");
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
    
        console.log("#A ",nestedArray )
  
  }
 
  //inserts a character into array 
  insertCharacter() {
        
    console.log("test1bbb:", nestedArray);
      
      
      
      
    //if ((verticalCursorPosition + 10 / 10) >= gLastLine)
    //  {
    //  gLastLine = verticalCursorPosition / 10;
    //
    
    //}


    //alert(nestedArray.join('\n'))
    //sconsole.log("#0 ",nestedArray )

    let countLines = 0;
    for (let y = verticalCursorPosition / 10; y > HEIGHT; y++) {
       
      countLines++;
      //is a character on last line
      if (nestedArray[y][WIDTH - 1] != "" && nestedArray[y][WIDTH - 1] != " ") {
        break;
      }
    }

    
      
    
    //console.log("#1 ",nestedArray )
    

    // first line than other endlines

    //first row
      
    //first element
    
    console.log("test1bb:", nestedArray);
    
    
      
    //alert(gKey);

    console.log("test1b:", nestedArray);

    let count = 0;
    
    //move characters to right on first row, after innitial character, see above.
    //Isnt working, doesn't display string after gKey
    for (let x = ((horizontalCursorPosition + 5) / 5); x < (WIDTH - 1); x = x + 1)
    {


     
      //move characters to right for first row 
      nestedArray2[(verticalCursorPosition / 10)][(x+1)] = nestedArray[(verticalCursorPosition / 10)][(x)]
      
    
      console.log( "test2: b => a", (verticalCursorPosition / 10), (x+1), '=>' , x );
    }
      
    nestedArray[verticalCursorPosition / 10][horizontalCursorPosition / 5] = gKey
    
    console.log("test1a: ", nestedArray);
    countLines++

    console.log("count ", count);

   
/*
    console.log("#2 ",nestedArray )

    //move characters to right after first row
    for (let y = verticalCursorPosition/ 10; y < countLines - 1; y = y + 1) {
        
      for (let x = 0; j < WIDTH; x = x + 1) {
      
        nestedArray[y][x] = nestedArray[y][x + 1]

      }
    }
*/
    

    console.log("#3 ",nestedArray)
    

    drawGrid()

    
    horizontalCursorPosition = horizontalCursorPosition + 5;
    if (((horizontalCursorPosition / 5) % (WIDTH)) === 0) {
      
      verticalCursorPosition = verticalCursorPosition + 10;
      horizontalCursorPosition = 0;
    }

    
    
    //alert("2: ",horizontalCursorPosition)
    //alert("1: ",verticalCursorPosition)
    
    CursorMovements.drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    )
      




      
    //turn two dimensional array into one dimensional array
    //this.makeOneDimArray();
     

    /*
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
 
*/


  }//end of insertion function
}

