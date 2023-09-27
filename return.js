class ReturnClass {
  
  constructor(){
    //firstUnderScoreXPosition = 0
   
    let lastLetterPos = 0
  }
  
  //x of first underscore
  checkForFirstUnderscore(y , x){
    
    for(let x1 = 0; x1 < WIDTH ; x1++ ){

    if(nestedArray[y][x] === '-' ){
      this.firstUnderScoreXPosition = horizontalCursorPosition/5
      break;
    }
  }

}




/*
fillInCharactersAfterUnderscore(x){
  let tempArray2 = JSON.parse(JSON.stringify(nestedArray))
  let y = verticalCursorPosition/10;
  for(let x1 = this.firstUnderscoreXPosition + 1  ; x1 < WIDTH ; x1++){
    
    let newValue = nestedArray[y][x1]
    tempArray2[y+1][x] = newValue

    x=x+1
    
  }
  nestedArray = [...tempArray]
}
*/

 
  
  Return() {
    
    
    let tempArray = JSON.parse(JSON.stringify(nestedArray))
    let hp = horizontalCursorPosition/5
    //checkForFirstUnderscore(y , x)
    //push everything down starting on line after current vertical position
    for (let y = (verticalCursorPosition / 10); y < HEIGHT - 1; y++) {
      for (let x = hp; x < WIDTH; x++) {
        //if ( x == firstUnderScoreXPosition) {
          //on underscore after return
         // hp = 0
          //continues to put characters after underscore in array
          //checkForFirstUnderscore(y, x)
          //fillInCharactersAfterUnderscore(x)
          
        //  break
        

       

       
        let newValue = nestedArray[y][x] // sets 10 times
        tempArray[y + 1][(x - hp)] = newValue

        ///Thankalert("alert");
        
        
        //console.log({ newValue })
      }    
     
        
        
      
    hp = 0;  
    }


    //this.removeCharactersOnRightOnActiveLine()
    nestedArray = [...tempArray]
    
    this.FindLastletterPositionOnRow()
    this.removeCharactersOnRightOnActiveLine()
    //this.displayFirstRowCharacters()
    drawGrid()
    //advances vertical position to next row where cursor will be
    verticalCursorPosition = verticalCursorPosition + 10
    horizontalCursorPosition = 0;
    alert(verticalCursorPosition/10)
    //alert(this.lastLetterPos)
    CursorMovements.drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    )
  }

  removeCharactersOtherThanAll(index){


  if (horizontalCursorPosition/5 == index)
        {
          for(let x = index; x <= this.lastLetterPos; x++)
          {
            nestedArray[verticalCursorPosition / 10][x] = 'C'
          }
        }
      }



  removeCharactersOnRightOnActiveLine() {
    //let tempArray = JSON.parse(JSON.stringify(nestedArray))
    //for (let x = horizontalCursorPosition/5;  x < WIDTH ; x++ ) {
      if (horizontalCursorPosition/5 == 0){
        for(let x = 0; x <= this.lastLetterPos; x++)
        {
          nestedArray[verticalCursorPosition / 10][x] = 'C'
        }
        
      }
      else {
        for(let x = 0; x <= this.lastLetterPos; x++){
        this.removeCharactersOtherThanAll(x)
      }
    }
    }
      /*
      else{

        //after 0 removed
        if (horizontalCursorPosition/5 == 1)
        {
          for(let x = 1; x < this.lastLetterPos; x++)
          {
            nestedArray[verticalCursorPosition / 10][x] = 'C'
          }
        }

      }
      */
      //else{
        ///Thankalert("alert");
        //this.FindLastletterPositionOnRow()
        //this.setSpaceOverLetter(horizontalCursorPosition/5)
      //}

      
      //grid starts with, '-'stack overflow

      //if letters after - this dash than skip this
      
      //FIND LAST CHARACTER POSITION
      
      //if (nestedArray[verticalCursorPosition/10][x] === '-') {
      //  return
      //}
      //Character represents space character
      
      
      
      //nestedArray[verticalCursorPosition / 10][x] = 'A'
      //alert("alert");
    //}
  //}
/*
  setSpaceOverLetter(onThisLocation){

    //if (horizontalCursorPosition/5 == onThisLocation)
        {
          console.log(onThisLocation, this.lastletterpos)
          for(let x = onThisLocation; x < this.lastLetterPos; x++)
          {
            //alert(nestedArray[verticalCursorPosition / 10][x])
            nestedArray[verticalCursorPosition / 10][x] = 'D'
          }
        }

      }
  checkForLetter(){


  }
  */
 
 FindLastletterPositionOnRow(){
  //index 4 = 3 for lastletterpos
  for(let x = 0; x < WIDTH ; x++){
    if(nestedArray[verticalCursorPosition/10][x] !== '-' )
    {
      this.lastLetterPos = x;//nestedArray[verticalCursorPosition/10][x]
      //alert(this.lastLetterPos);
    }
  }
 }

 //4 characters : lastLetterPos : 3
 displayFirstRowCharacters(){
 
  //x = 10, null = 9  - 9 repeats
  let nullSpaces = WIDTH - 1  -  this.lastLetterPos   
  console.log({nullSpaces});
 
  for (let x = 0   ; x< nullSpaces ; x++ ){
    console.log({x}, {nullSpaces})
   
  nestedArray[verticalCursorPosition/10+ 1][x] = 'B'
  console.log(nestedArray[verticalCursorPosition/10 - 1][x])
}
}
}

