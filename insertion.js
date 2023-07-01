

class InsertClass {


    x(){

    }

    //inserts a character into array using splice (the reason for one dim array conversion)
    insertCharacter() {
        console.log('2: ', oneDimArray)

        
        oneDimArray.splice(
          

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
    


      //last word
      //word's x start
      //word's x end
    
    
    
    // a one dim array with word spliced
    findWords() {
 
        let startWordX = 0;
        let endWordX = 0;
        let x = 0;


        let z = 0;
        wordArray = [' '];
        for (x = 0; x < WIDTH * HEIGHT; x++) {
            
            if (oneDimArray[x] == ' ') {
                startWordX = x;
                isInWord = true;
            }

            if (oneDimArray[x] == ' ') {
                endWordX = x;
                isInWord = false;
                break;
            }
            if (isInWord) {
                wordArray[x+1] == oneDimArray[x];
                z++
            }

            //the word is now :  " word-here "
            wordArray[z] = ' ';

        }

        lengthOfWord = endWordX - startWordX;

        z = 0;
        for (x = WIDTH; x < lengthOfWord+2; x++) {

            //sdsj fsllsj word-here lkkkkl koji ji ojoji
            oneDimArray.splice(    x,0,wordArray[z])
            z++
            
        }

        for (let y = 0; y < 35; y++){
            for (let x = 0; x < 35; x++){
                if (WIDTH - x <= lengthOfWord) {
                    
                    for (let x1 = 0; x1 < lengthOfWord; x++){
                        
                        oneDimArray.splice(x, 0, wordArray[x1])
                    }
                    
                    
                }

            }
        }






        
        positionOfWord = x;
        lengthOfWord = endWordX - startWordX;
        // get length, find avalable space
        //all on first line
        if (endWordX < 35) {

            return
                
        }

        else {

            for (x = WIDTH; x < WIDTH * 2; x++) {
            
                if (oneDimArray[x] == oneDimArray[x]) {

                }

        }
        let CrossesOverEdgeFlag = false;
        
        


        



        
        
        
        for (let x = startWordX; x < endWordX; x++) {

            if (x % WIDTH == 0) {
                CrossesOverEdgeFlag = true;
                break;
            }
        }


        ///// rewritte onde dima rray



        /////



        //insert word on next line - if no space for it, push all rows down
        
        if (endWordX >= 35) {
            lengthOfWord = endWordX - startWordX;
        
        
        }
        //rows


        // find any available space

        let spacesAvailabl = 0;
        for (let y = 0; y < 60; y++) {
            for (let x = 0; x < WIDTH; x++){
                
            }
            
        }
        
        //find Available space after endWordX

            

    }
}
      

}