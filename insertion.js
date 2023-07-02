

class InsertClass {


    

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
          for (let j = 0; j < WIDTH; j = j + 1, z++) {
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
 



        //add one charatcer to nested array
        //if on last block than movve the character down one row
        //if characters are therw (including space) and below than increment all those elements
        //consider words so they don't wrap



        
        let startWordX =-1;
        let endWordX = 0;
        let x = 0;


        let z = 0;
        wordArray = [' '];



        let rowCounter = -1;

        let spaceCountr = 0;
        let XEndOfWord = -1;
        let XStartOfWord = -1;
        let isntInThnisRow = false;

        //Find if word is on same row
        for (x = WIDTH; x > 0; x--) {
            

            if (oneDimArray[x] == ' ' && rowCounter == -1) {
                
                endWordX = x;
                isntInThnisRow = false;
                XEndOfWord = x;
                rowCounter = 1;
               
            }


            if (oneDimArray[x] == ' ' && rowCounter == 1) {


                startWordX = x;
                isntInThnisRow = true;
                XStartOfWord = x;
                startWordX = 1;
                break;
                
            }


            
        }



        //find XEndOfWork




            
            //is no start, just end.
            //end is now start
        if (isntInThnisRow) {
                
            startWordX = XEndOfWord;
            XEndOfWord = -1;

                

        
        
                //only when there isn't an end found yet, get first space and break
        
            
                for (let i = 0; i < WIDTH * HEIGHT; i++) {
            
                    if (oneDimArray == ' ') {
                        XEndOfWord = i;
                        break;
                    }
                }
           


        
        
            lengthOfWord = endWordX - startWordX;
        
            wordArray[0] = ' ';
        
            //creates an array of the word to be moved to next row
            
                for (let i = 1; i < lengthOfWord; i++) {
                    //avoid first space in word
                    wordArray[i] == oneDimArray[startWordX + i-1];
                    z++
                }
           

            //the word is now :  " word-here "
            wordArray[z] = ' ';
   
        

            z = 0;

        

        
        
            //splices blanks from where word was removed
            for (let i = startWordX; i < endWordX; i++) {
                oneDimArray.splice(i, 0, ' ')
                
            }
        

            //CHANGE THIS AFTER TESING, TEST DISPLAY WORDS ON LINE
            //SPLICES WORD ON A LINE EIGHT ROWS UNDER INSERT
            for (let i = WIDTH * 8; i < lengthOfWord; i++) {
                oneDimArray.splice(i, 0, wordArray[i]);
            }


        
        
        }
        




         
        

}
      

}