//horizontal and vertical increment is 5.

class ReturnClass {
    constructor() {

        //rows and columns of canvas
        //this.rows = 35;
        //this.cols = 35;
        
        this.lastLine = 0;
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
        
            
            let breakflag = false;
            //alert(this.lastLine);
        
            
        
        for (let j = this.lastLine; j >= 0; j = j - 1) {
            //for (let i = 0; i < 35; i++) {

                console.log("j", j);
                console.log("vert", verticalCursorPosition/10);
            if (j == verticalCursorPosition / 10) {
                    
                
                for (let a = 0; a < 5; a++) {
                    
                    breakflag = true;
                    continue;
                }

                if (breakflag == true) {
                    breakflag = false;
                    continue;
                }
            }
                
                
            
            //return has been pressed, we are looking at vertical spectrum if it is greater than
            //were we are
            //if j is greater from that forward we need to push down the array
            else if (j > (verticalCursorPosition / 10)) {
                
                    
                
                ///////////////////////////////////
                //////////////////////////////////  check for a return when no character to right,
                //moves everything down and returnd out
                ///////////////////////////////////
                ///////////////////////////////////
                ////////////////////////////////////
                
                for (let x = 0; x < 10; x++){
                    if (nestedArray[verticalCursorPosition[x]] != "" && nestedArray[verticalCursorPosition][x] != ' ') {
                        
                        break;
                    }
                }
                
                    
                    

                    
                    
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
                for (let y = 0; y < verticalCursorPosition-20/10; y++) {
                    for (let x = 0; x < 10; x++) {

                        nestedArray2[y][x] = (nestedArray[y][x]);
                    }
                }

                for (let y = 0; y < 10; y++) {
                    for (let x = 0; x < 10; x++) {
                
                        nestedArray[y][x] = nestedArray2[y][x]
                    }
                }


                
                    
                

                

                

                

                
                //text to keep - looks good
                for (let x = 0; x < horizontalCursorPosition/5; x++) {
                 
                    holdsTextToKeep[0][x] = nestedArray[verticalCursorPosition/10][x];
                    
                }

                console.log("http: ", holdsTextToKeep);

                
                
                
               
                
                
    



                //gets length of hold text
                let textOnRightToForwardLength = 35 - horizontalCursorPosition/5
                





                //text to move to next vertical line
                for (let x = horizontalCursorPosition/5; x < 10; x++) {
                
                    holdsTextToMove[0][x - 1] = nestedArray[verticalCursorPosition / 10][x];
                        
                }

               
                
                


                
                   
                
                
                //IF:
                
                for (let y = 0; y < 10; y++) {
                    for (let x = 0; x < 10; x++) {
                        nestedArray2[x][y] = nestedArray[x][y];

                    }
                }

                

                //remove the extra characters left behind by code segment 1

                for (let x = 0; x < 10; x++){

                    //nestedArray[verticalCursorPosition / 10 + 1][x] = 'E';
                }
                


                
                //displays all rows after users posiiton on row down
                //code segment 1
                for (let y = verticalCursorPosition/10; y < 10; y++){
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
                for (let x1 = 0; x1 <  10; x1++)
                {
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


                for (let x = 0; x < 10; x++)
                {
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

                    

                }

                
            //}
            break;
        }

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

