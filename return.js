

//6/18/23


//if (nestedArray[verticalCursorPosition[x]] != "" && nestedArray[verticalCursorPosition][x] != '') {
/*
123
456
789

Mostly works, press 5 twice, error

working on return with no characters on right below (commented out!)

*/







//horizontal increment:  5.
//vertical increment is 10.

class ReturnClass {
    constructor() {

        //rows and columns of canvas
        //this.rows = 35;
        //this.cols = 35;
        
        this.lastLine = 0;
        this.firstTimeThrough = true;
        
        
    }


    
    
    
    Return() {

      

        let i = 1;
                
                
       


        //alert("1");
        
                
///////////

        //initial charctar for use with return when it is on first character (different implementation)
        let initialCharacter = '';

        //Used for extra code in two locations
        let condition = "cursorNotOnFirstSpace";
        if (horizontalCursorPosition == 0) {
        
            condition = "cursorOnFirstSpace";
            
        
        }
        //There are two of these, the other is below for printing text condition, is after spaces are displayed.
        if (condition == "cursorOnFirstSpace") {
            
            initialCharacter = nestedArray[verticalCursorPosition / 10][0];

            let index = 0;
            for (let x = 1; x < 10; x++) {
                holdsTextToMove[0][x] = ' ';
            }
            
            
            //text to move lines and cursor to next vertical line
            for (let x = ((horizontalCursorPosition) / 5); x < 10; x++) {
                
                holdsTextToMove[0][index] = nestedArray[verticalCursorPosition / 10][x + 1];
                index++;
                        
            }

            console.log("httm: ", holdsTextToMove);
            
        }
        // return does not happen with first character cursored
        else {


           
        
            
            /////////////////////////
            
            let index = 0;
            for (let x = 0; x < 10; x++) {
                holdsTextToMove[0][x] = ' ';
            }
            //code to hold moved text (after cursor)
            for (let x = ((horizontalCursorPosition) / 5); x < 10; x++) {
                
                holdsTextToMove[0][index] = nestedArray[verticalCursorPosition / 10][x];
                index++;
                        
            }

            console.log("http: ", holdsTextToMove);

               
            //alert("2");
        }   

            ///////////////////////////
                
                   
                
                
        
        //Readies array to be held completely, next segment below.        
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                nestedArray2[x][y] = nestedArray[x][y];

            }
        }

                

        


                
        //displays all rows at cusror to bottom of text box, could use end line variable 
        //code segment 1
        for (let y = verticalCursorPosition / 10; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                       

                        
                nestedArray2[y + 1][x] = (nestedArray[y][x]);
            }
        }

                
        //Variable is ready for transfer to other array
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                nestedArray[x][y] = nestedArray2[x][y];

            }
        }

                

        //alert("3");


                
                

        /////////////////

        //put text on next line
        for (let x1 = 0; x1 < 10; x1++) {
            
            nestedArray[verticalCursorPosition / 10 + 1][x1] = holdsTextToMove[0][x1];
                    
                    
            console.log("printtext: ", nestedArray[verticalCursorPosition / 10 + 1][x1])
                    
        }


        ////////////////////


        console.log("* ", nestedArray2);
        console.log("! ", nestedArray)
                
                
        
        
        //displays spaces after cursor position, leaving the initial text left of cursor
        for (let x = (horizontalCursorPosition / 5) ; x < 10; x++) {
            nestedArray[verticalCursorPosition / 10][x] = ' ';
        }


        
        horizontalCursorPosition = 0;

        //if space on second row than set horizontal positioin to there so that cursor may be placed later
        for (let x = 0; x < 10; x++) {

            let character = nestedArray[verticalCursorPosition / 10 + 1][x]
            
            console.log("X: ", x);
            console.log("char: ", character);



            if (character === ' ') {
                
                horizontalCursorPosition = (x * (5) );
                //alert("space: ", x);
                break;
            }

        }

        //////////////Second and last change in code for cursor on first character

        if (condition == "cursorOnFirstSpace") {
            nestedArray[verticalCursorPosition/10][0] = initialCharacter;
        }


        //////////////
        
        drawGrid();


        

                  
        
                   
        TextArea.makeOneDimArrayWithoutCommas;
        
        

                

                
            
           

        this.lastLine = this.lastLine + 1;
        
        //advances vertical position to next row where cursor will be
        verticalCursorPosition = verticalCursorPosition + 10;
        
        

        //drawGrid;

        CursorMovements.drawCursor(
            horizontalCursorPosition + HOFFSET,
            verticalCursorPosition + VOFFSET
        )
        
        
    }
}