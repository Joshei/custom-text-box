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

        console.log("vert: ", verticalCursorPosition);
        console.log("last: ", this.lastLine);
        
            
            let breakflag = false;
            //alert(this.lastLine);
        
            
        
        for (let j = this.lastLine; j >= 0; j = j - 1) {
            //for (let i = 0; i < 35; i++) {

                console.log("j", j);
                console.log("vert", verticalCursorPosition/10);
                if (j == verticalCursorPosition/10) {
                    
                
                    for (let a = 0; a < 5; a++) {
                        //verticalCursorPosition[0][a] = 'z';
                        breakflag = true;
                        continue;
                    }

                    if (breakflag == true){
                        breakflag = false;
                        continue;
                    }
                }
                
                
            
                //return has been pressed, we are looking at vertical spectrum if it is greater than
                //were we are
                //if j is greater from that forward we need to push down the array
                else if (j > (verticalCursorPosition / 10)) {
                
                    

                    alert(j);
                    alert(verticalCursorPosition);
                    
                    
                    //5
                    console.log("NA: ",nestedArray)


                    



                    console.log("cl: ", nestedArray);
                    

                    
                    
                    let holder = [];
                    let holder1 = [];
                        for (let i = 0; i < 2; i++) {

                            holder.push(nestedArray[2][i]);
                            holder1.push(nestedArray[1][i]);
                        }
                  
                    console.log("holder: ", holder);
                    console.log("holder1: ", holder1);
                        
                    
                   
                   
                   
                   
                   
                   
                    ///////////////////// - holders have commas. uncomment!
                    //nestedArray[(this.lastLine + 1)][0] = holder; 

                    //nestedArray[(this.lastLine + 0)][0] = holder1;





                    


                    
                    
                    
                    
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
                    


                    //TextArea.makeOneDimArrayWithoutCommas;
                    //console.log("this1: ", TextArea.oneDimArray2);

                    ////draws grid and cursor
                    //makeTwoDimArray();
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

