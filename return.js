

//6/18/23


//if (nestedArray[verticalCursorPosition[x]] != "" && nestedArray[verticalCursorPosition][x] != '') {
/*
123
456
789

Mostly works, press 5 twice, error

working on return with no characters on right below (commented out!)

*







//horizontal and vertical increment is 5.

class ReturnClass {
    constructor() {

        //rows and columns of canvas
        //this.rows = 35;
        //this.cols = 35;
        
        this.lastLine = 0;
        this.firstTimeThrough = true;
        //let holderArray = [];
        //this.holderArray = [];
        
        //fill array wiht no values - set up the two dimensional array
        //holderArray = Array.from({ length: 35 }, () =>
        //Array.from({ length: 35 }, () => '')
        //)
        
    }


    
    
    //nothing below this line at all.
    Return() {

        var isWithTextToWriteBelow = false

        console.log("vert: ", verticalCursorPosition);
        console.log("last: ", this.lastLine);
        
            
        let areCharacters = false;
        //alert(this.lastLine);
        
            
        
        
           

            






            
        /*   
                
                    
                
        ///////////////////////////////////
        //////////////////////////////////  check for a return when no character to right,
        //moves everything down and returnd out
        ///////////////////////////////////
        ///////////////////////////////////
        ////////////////////////////////////
                

        //check for no characters and first row 

        if (this.firstTimeThrough == true) {
            
            this.firstTimeThrough = false;

            verticalCursorPosition = verticalCursorPosition + 10;
            horizontalCursorPosition = 0;

            drawGrid();

            CursorMovements.drawCursor(
                horizontalCursorPosition + HOFFSET,
                verticalCursorPosition + VOFFSET
            )


            return;
        }
        
        
        for (let x = horizontalCursorPosition/5; x < 10; x++) {
            if (nestedArray[verticalCursorPosition[x]] != "" && nestedArray[verticalCursorPosition][x] != '') {
                        
                areCharacters = true;
                break;
            }
        }

           
        
        //isn't any characters after
        if (areCharacters == false) {
            alert("no characters");

        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                
                nestedArray2[y][x] = nestedArray[y][x]
            }
        }

        


           
            for (let y = (verticalCursorPosition/10 + 1); y < 10; y++) {
                for (let x = 0; x < 10; x++) {

                    nestedArray2[y + 1][x] = nestedArray[y][x];
                }
            }

                    

            for (let y = 0; y < 10; y++) {
                for (let x = 0; x < 10; x++) {
                    
                    nestedArray[y][x] = nestedArray2[y][x]
                }
            }



            //erase characters in positioin verticle position + 1
            for (let x = 0; x < 10; x++)
            {
                nestedArray[verticalCursorPosition/10+1][x] = ' ';
                }
                

            verticalCursorPosition = verticalCursorPosition + 10;
            horizontalCursorPosition = 0;
        

            drawGrid();

            CursorMovements.drawCursor(
                horizontalCursorPosition + HOFFSET,
                verticalCursorPosition + VOFFSET
            )
                    
            return;
        }
                
                    
        
        
        */
        
        
        
                    

                    
                    
        let holder = [];
        let holder1 = [];


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

                nestedArray2[y][x] = (nestedArray[y][x]);
            }
        }

        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                
                nestedArray[y][x] = nestedArray2[y][x]
            }
        }


                
                    
                

                

        //blanks out current row so next segment can displau only hold text

        for (let x = 0; x < 10; x++) {
           // nestedArray[verticalCursorPosition/10][x] = 'V';
        }
                

                
        //text to keep - looks good
        for (let x = 0; x < horizontalCursorPosition / 5; x++) {
                 
            holdsTextToKeep[0][x] = nestedArray[verticalCursorPosition / 10][x];
                    
        }

        console.log("http: ", holdsTextToKeep);

                
                
                
               
                
                
    



        //gets length of hold text
        let textOnRightToForwardLength = 35 - horizontalCursorPosition / 5
                





        //text to move to next vertical line
        for (let x = horizontalCursorPosition / 5; x < 10; x++) {
                
            holdsTextToMove[0][x - 1] = nestedArray[verticalCursorPosition / 10][x];
                        
        }

               
                
                


                
                   
                
                
        //IF:
                
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                nestedArray2[x][y] = nestedArray[x][y];

            }
        }

                

        //remove the extra characters left behind by code segment 1

        for (let x = 0; x < 10; x++) {

            //nestedArray[verticalCursorPosition / 10 + 1][x] = 'E';
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

                

                


                
                

        /////////////////

        //put text on next line
        for (let x1 = 0; x1 < 10; x1++) {
            //alert("here1");
            nestedArray[verticalCursorPosition / 10 + 1][x1] = holdsTextToMove[0][x1];
                    
                    
            console.log("printtext: ", nestedArray[verticalCursorPosition / 10 + 1][x1])
                    
        }



        //////////////////////////////////////////////////
        //erases vertical position row.
        // if then!
        for (let x = 0; x < 34; x++) {

            //nestedArray[verticalCursorPosition/10][x] = 'D';

        }

        ////////////////////////////////////////////////////


        for (let x = 0; x < 10; x++) {
            //nestedArray[verticalCursorPosition / 10][x] = holdsTextToKeep[0][x]; 

            //console.log("xxx: ",holdsTextToKeep[0][x]);
        }

                
                    

                
                


        ////////////////////


        console.log("* ", nestedArray2);
        console.log("! ", nestedArray)
                
                
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                //nestedArray[x][y] = nestedArray2[x][y];

            }
        }
                

        /*
        123
        456
        56
        789


        put cursor on 5 and no character alert happpens.
        123
        456
        78
        */
        
        //spaces
        for (let x = horizontalCursorPosition/5;  x < 10  ; x++) {
             nestedArray[verticalCursorPosition/10][x] = 'V';
         }






                  
        console.log("holder: ", holder);
        console.log("holder1: ", holder1);
                   
        TextArea.makeOneDimArrayWithoutCommas;
                    
        // https://stackoverflow.com/7011550/array-of-objects-in-js 
        //
        //   holder[i] = array of objects
        //   for loop
        //   nestedArray[verticalCursorPosition][a] = holder[i].x1
        //  var test =
        //  {
        //       x1
        //       x2
        // 
        //       x35 
        //  }
                   
                   
                   
        holder[0] = 'c';
        ///////////////////// - holders have commas. uncomment!
        //nestedArray[(this.lastLine + 1)][0] = holder[0]; 

        //nestedArray[(this.lastLine + 0)][0] = holder1[0];





                    


                    
                    
                    
                    
        //wouldnt work right at top of function, displayed an extra letter one row down
        for (let a = 0; a < 2; a++) {
            //nestedArray[verticalCursorPosition+1][a] = 'z';
                    
            console.log("vertical: ", verticalCursorPosition);

        }


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
        //console.log("this1: ", TextArea.oneDimArray2);

        ////draws grid and cursor
        //oDimArray();
        //console.log("this2: ", nestedArray);

                    

                

                
            
           

        this.lastLine = this.lastLine + 1;
        verticalCursorPosition = verticalCursorPosition + 10;
        horizontalCursorPosition = 0;
        

        drawGrid();

        CursorMovements.drawCursor(
            horizontalCursorPosition + HOFFSET,
            verticalCursorPosition + VOFFSET
        )
        
        

        


        
    }
}
