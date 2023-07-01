

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
 
        let startWordX =-1;
        let endWordX = 0;
        let x = 0;


        let z = 0;
        wordArray = [' '];



        let rowCounter = -1;

        let spaceCountr = 0;
        let XEndOfWord = -1;
        let XStartOfWord = -1;
        for (x = WIDTH; x > 0; x--) {
            

            if (oneDimArray[x] == ' ' && rowCounter == -1) {
                
                endWordX = x;
                isInWord = false;
                XEndOfWord = x;
                rowCounter = 1;
               
            }


            if (oneDimArray[x] == ' ' && rowCounter == 1) {


                startWordX = x;
                isInWord = true;
                XStartOfWord = x;
                startWordX = 1;
                break;
                
            }
        }
            
            //is no start, just end.
            //end is start
            if (startWordX == -1){
                
                startWordX = XEndOfWord;
                XEndOfWord = -1;

                }

        
        lengthOfWord = endWordX - startWordX;
        
        
        if (isInWord) {
            for (let i = 0; i < 0;  i++) {
           
                wordArray[i + 1] == oneDimArray[i];
                z++
            }
        }

            //the word is now :  " word-here "
            wordArray[z] = ' ';

        






        
        
        

        z = 0;
        for (x = WIDTH; x < lengthOfWord; x++) {

           
            oneDimArray.splice(x, 0, wordArray[z])
             
            z++
            
        }

        let counts = 0;
        let amountOfCharactersOnFOrstLine = 0
        let amountOfCharactersOnNextLine = 0




        let amountOfCharsOnFirstLineToRemove = startWordX - width
        //if (XStartOfWord < WIDTH && XEndOfWord > WIDTH) {
            
            for (let i = startWordX; i < WIDTH; i++) {
                oneDimArray.splice(i, 0, ' ')
                
        }
        

        //  a  b  c
        //  d
        for (let i = 35; i < lengthOfWord; i++){
            oneDimArray.splice(i, 0, wordArray[i]);
        }


        
        




         
        

}
      

}