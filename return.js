

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

        
        
        this.lastLine = 0;
        this.firstTimeThrough = true;
        let holdsTextToMove = []
        
        
    }


    
    
    
    Return() {

      

        if (gLastLine == HEIGHT-1)
        {
            return;
            
        }
        
        let i = 1;
                
                
        ///////////

        let index = 0;
        for (let x = 0; x <  WIDTH; x++) {
            holdsTextToMove[0][x] = ' ';
        }
        //code to hold moved text (after cursor)
        //for (let y = 0; y < HEIGHT; y++)
        for (let x = ((horizontalCursorPosition) / 5); x < WIDTH; x++) {
            
            //holdsTextToMove[0][x] = nestedArray[verticalCursorPosition / 10][x];
            //index++;
 //           let newValue = nestedArray[verticalCursorPosition/10][x];
 //           holdsTextToMove[verticalCursorPosition/10][index] = newValue;
            index++;
        }




        ///////////
       

        //initial charctar for use with return when it is on first character (different implementation)
        let initialCharacter = '';

        //Used for extra code in two locations
        //let condition = "cursorNotOnFirstSpace";
        //if (horizontalCursorPosition == 0) {
        
        //    condition = "cursorOnFirstSpace";
            
        
        //}
        //There are two of these, the other is below for printing text condition, is after spaces are displayed.
        
        //condition = "no";

            ///////////////////////////
                
                   
                
                
        
        /*
        //Readies array to be held completely, next segment below.        
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                let newValue = nestedArray2[y][x]
                nestedArray[y][x] = newValue;

            }
        }

        //alert(nestedArray.join('\n'))
        //alert(nestedArray2.join('\n'))

        //console.log("NA1a: ",nestedArray)
        //    console.log("NA2b: ", nestedArray2)
        


                
        
        let breakFlag2 = false;
        //displays all rows at row below cursor to bottom of text box, could use end line variable 
        //code segment 1
        for (let y = verticalCursorPosition / 10; y < HEIGHT-1; y++) {
            for (let x = 0; x < WIDTH; x++) {
                       
                if (y == HEIGHT)
                {
                    //breakFlag2 = true;
                    //break;
                    
                }
                
               

                
                        
                nestedArray2[y + 1][x] = (nestedArray[y][x]);
                
            }

            console.log("NA1: ",nestedArray)
            console.log("NA2: ", nestedArray2)
            
            if (breakFlag2)
            {
                break;
            }
            
        }

                
        //Variable is ready for transfer to other array
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                nestedArray[y][x] = nestedArray2[y][x];

            }
        }

        //nestedArray2 = [];

                

        //alert("3");


                
                

        */
        /////////////////

        //let tempArray = Array.from({ length: HEIGHT }, () =>
        //Array.from({ length: WIDTH }, () => '')
        //)

        //let holdsTextToStay = Array.from({ length: HEIGHT }, () =>
        //Array.from({ length: WIDTH }, () => '')
        //)
        
        
        let tempArray = JSON.parse(JSON.stringify(nestedArray));
            
       //y = 0; //verticalCursorPosition / 10 - 1
        
       
        /*
        let holdsTextToStay = JSON.parse(JSON.stringify(nestedArray));

       for (let x = 0; x < horizontalCursorPosition/5; x++) {
           let newValue = nestedArray[verticalCursorPosition/10][x]
           holdsTextToStay[0][x] = newValue
        }
        



        console.log({ holdsTextToStay })
*/

        


        




        let heightX = 0

        console.log({ nestedArray })
        let breakFlag = false;
       // let y = verticalCursorPosition/10 + 1;
            //push everything down starting on line after current vertical position
        for (let y = verticalCursorPosition / 10; y < HEIGHT - 1; y++) {
            for (x = horizontalCursorPosition / 5; x < WIDTH; x++) {
                
                if (nestedArray[y][x] === '-') {
                    //breakFlag = true;
                    //break
                }

                console.log("!!: ", nestedArray);
                let newValue = nestedArray[y][x]  // sets 10 times
                console.log({ newValue })
                tempArray[y + 1][x] = newValue;
            }
            if (breakFlag == true) {
                //break
            }
        }

        
        //erase after cursor on return
        nestedArray = [...tempArray];
        //console.log({ nestedArray })

        


        breakFlag = false;
        for (let y = verticalCursorPosition / 10; y < HEIGHT; y++) {
            for (let x = horizontalCursorPosition / 5; x < WIDTH ; x++) {
                console.log(x,y, nestedArray)
                if (nestedArray[y][x] === '-') {
                    breakFlag = true;
                    break
                }
                nestedArray[y][x] = "K"
            }
            if (breakFlag == true) {
                break
            }
            
        }

        let amtCharacters = 0
        
        for (let y = verticalCursorPosition / 10; y < HEIGHT; y++) {
            for (let x = 0; x < horizontalCursorPosition; x++) {
                

            }
        }
        

        
        //nestedArray = [...holdsTextToStay];
        //console.log({nestedArray})

                /*

                if (newValue == null || newValue == '') {
                    newValue = '0'
                    
                }
                if (x % WIDTH == 1 && y == HEIGHT) {
                    break;
                }
                else if (x % WIDTH == 1) {
                    //alert("zz");
                    x = -1
                    y = y + 1
                    if (y == HEIGHT) {
                        break;
                    }
                    
                    console.log({nestedArray});
                    //illegal set
                    console.log("qwert: ", y)
                    if (nestedArray[y][0] == '') {
                        //continue
                    }
                    
                    nestedArray[y][0] = newValue;
                }
                    
                
                else {
                    
                    }
                    
        
        if (y + 1 == HEIGHT) {
            break;
                }
                console.log("zz1: ", newValue);
                nestedArray[y+1][x]= newValue;
            }
          //      }

        */
        
        
        
        ///////////////////good code
        /*
      //put text on next line
        let x = 0
        index = 0
        for (y = 0; y < HEIGHT; y++) {
        for (x = 0; x < WIDTH; x++) {
            
            if (x == WIDTH) {
                //break;
            }
            let newValue = holdsTextToMove[0][index]
            nestedArray[((verticalCursorPosition / 10) + 1)][x]= newValue;
                    
                    
            //console.log("printtext: ", nestedArray[verticalCursorPosition / 10 + 1][x1])
                    
        }
        horizontalCursorPosition = x * 5

        console.log("value1: ", holdsTextToMove);


        ////////////////////


        console.log("* ", nestedArray2);
        console.log("! ", nestedArray)
                
                
        
        
        //displays spaces after cursor position, leaving the initial text left of cursor
        for (let x = ((horizontalCursorPosition / 5)) ; x < WIDTH; x++) {
            
            nestedArray[verticalCursorPosition/ 19][x] = 'X';
        }


        */
       //////////////////////////////// 
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            


      /*  
        //if space on second row than set horizontal positioin to there so that cursor may be placed later
        let breakFlag = false;
        for (let y = verticalCursorPosition/10; y < HEIGHT; y++) {
            for (let x = 0
                ; x < WIDTH; x++) {
                
                

                let character = nestedArray[y + 1][x]
            
                if (character === ' ' || character === '') {
                    
                    horizontalCursorPosition = x * 5
                    verticalCursorPosition = y * 10
                    breakFlag = true;
                    
                    
                    break;
                }

            }

            if (breakFlag == true)
                break;
        }

        

        

        if (condition == "cursorOnFirstSpace") {
           
           
            //horizontalCursorPosition = 0;
        }
*/

        //////////////
        
        drawGrid();


        

                  
        
                   
        //TextArea.makeOneDimArrayWithoutCommas;
        
        

                

                
            
           

        this.lastLine = this.lastLine + 1;

        gLastLine++;
        
        //advances vertical position to next row where cursor will be
        verticalCursorPosition = verticalCursorPosition + 10;
        
        

        //drawGrid;

        CursorMovements.drawCursor(
            horizontalCursorPosition + HOFFSET,
            verticalCursorPosition + VOFFSET
        )
        
        
    }
}