

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

        

            
        let areCharacters = false;
        
        

        let i = 1;
                
                
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                    
                nestedArray2[y][x] = nestedArray[y][x]
            }
        }

        //if commented out dipalys tow rows of spaces on first and second row
        //displays all lines prior to vertical position user is on 
        for (let y = 0; y < verticalCursorPosition - 20 / 10; y++) {
            for (let x = 0; x < 10; x++) {

                //nestedArray2[y][x] = (nestedArray[y][x]);
                
            }
        }

        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                
                nestedArray[y][x] = nestedArray2[y][x]
            }
        }


        //alert("1");
           
        //text to keep - looks good
        for (let x = 0; x < horizontalCursorPosition / 5; x++) {
                 
            holdsTextToKeep[0][x] = nestedArray[verticalCursorPosition / 10][x];
                    
        }

        

        //gets length of hold text
        //let textOnRightToForwardLength = 35 - horizontalCursorPosition / 5
                
///////////

        let initialCharacter = '';
        let condition = "cursorNotOnFirstSpace";
        if (horizontalCursorPosition == 0) {
        
            condition = "cursorOnFirstSpace";
            
        
        }
        if (condition == "cursorOnFirstSpace") {
            
            initialCharacter = nestedArray[verticalCursorPosition / 10][0];

            let index = 0;
            for (let x = 1; x < 10; x++) {
                holdsTextToMove[0][x] = ' ';
            }
            //text to move to next vertical line
            for (let x = ((horizontalCursorPosition) / 5); x < 10; x++) {
                
                holdsTextToMove[0][index] = nestedArray[verticalCursorPosition / 10][x + 1];
                index++;
                        
            }

            console.log("http: ", holdsTextToMove);
            
        }
        else {


            ///////////
        
        
            
            ////////////////////
            
            let index = 0;
            for (let x = 0; x < 10; x++) {
                holdsTextToMove[0][x] = ' ';
            }
            //text to move to next vertical line
            for (let x = ((horizontalCursorPosition) / 5); x < 10; x++) {
                
                holdsTextToMove[0][index] = nestedArray[verticalCursorPosition / 10][x];
                index++;
                        
            }

            console.log("http: ", holdsTextToMove);

               
            //alert("2");
        }   

///////////////////////////
                
                   
                
                
        //IF:
                
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                nestedArray2[x][y] = nestedArray[x][y];

            }
        }

                

        


                
        //displays all rows after users posiiton on row down
        //code segment 1
        for (let y = verticalCursorPosition / 10; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                       

                        
                nestedArray2[y + 1][x] = (nestedArray[y][x]);
            }
        }

                

        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                nestedArray[x][y] = nestedArray2[x][y];

            }
        }

                

        //alert("3");


                
                

        /////////////////

        //put text on next line
        for (let x1 = 0; x1 < 10; x1++) {
            //alert("here1");
            nestedArray[verticalCursorPosition / 10 + 1][x1] = holdsTextToMove[0][x1];
                    
                    
            console.log("printtext: ", nestedArray[verticalCursorPosition / 10 + 1][x1])
                    
        }


        ////////////////////


        console.log("* ", nestedArray2);
        console.log("! ", nestedArray)
                
                
        
        
        //spaces
        for (let x = (horizontalCursorPosition / 5) ; x < 10; x++) {
            nestedArray[verticalCursorPosition / 10][x] = ' ';
        }


        horizontalCursorPosition = 0;

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

        //////////////

        if (condition == "cursorOnFirstSpace") {
            nestedArray[verticalCursorPosition/10][0] = initialCharacter;
        }


        //////////////
        
        drawGrid();


        console.log("hp ", horizontalCursorPosition);





        console.log("vp ", verticalCursorPosition);


        //horizontalCursorPosition = 30;



        //alert("5");


                  
        
                   
        TextArea.makeOneDimArrayWithoutCommas;
                    
        
           
       


        //////////////



        //////
        //data to use : 12  34  56
        //two holders holds the parts of nestedArrray and should display without commas
        //if uncommented, will display with commas, now  
        //right below this are some functions
        //before holders were used a single value was changed for the two values with a 	   	       zz for space.
        //What needs to be done now is holder needs to be changed to an array of objects
        //and than the two functions below need to be arranged to handle an array called 		       in
        //and something returned
        //look at break below and aso right above is the z to be set (denotes spacing)

        //holder: 5,6
        //holder1: 3,4
                    


        TextArea.makeOneDimArrayWithoutCommas;
        

                

                
            
           

        this.lastLine = this.lastLine + 1;
        verticalCursorPosition = verticalCursorPosition + 10;
        //horizontalCursorPosition = horizontalCursorPosition + 5;
        

        //drawGrid;

        CursorMovements.drawCursor(
            horizontalCursorPosition + HOFFSET,
            verticalCursorPosition + VOFFSET
        )
        
        
    }
}