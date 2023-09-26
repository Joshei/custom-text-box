class ReturnClass {
  
  constructor(){
    //firstUnderScoreXPosition = 0
  }
  
  //x of first underscore
  checkForFirstUnderscore(y , x){
    
    for(let x1 = 0; x1 < WIDTH ; x1++ ){

    if(nestedArray[y][x] === '-' ){
      this.firstUnderScoreXPosition = x1
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
        
        //console.log({ newValue })
      }    
     
        
        
      
    hp = 0;  
    }
    //this.removeCharactersOnRightOnActiveLine()
    nestedArray = [...tempArray]
    this.removeCharactersOnRightOnActiveLine()
    drawGrid()
    //advances vertical position to next row where cursor will be
    verticalCursorPosition = verticalCursorPosition + 10
    CursorMovements.drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    )
  }

  removeCharactersOnRightOnActiveLine() {
    //let tempArray = JSON.parse(JSON.stringify(nestedArray))
    for (let x = 0; x < horizontalCursorPosition; x++) {
      //grid starts with, '-'stack overflow
      if (nestedArray[verticalCursorPosition/10][x] === '-') {
        return
      }
      //Character represents space character
      nestedArray[verticalCursorPosition / 10][x] = 'A'
      //alert("alert");
    }
  }
}

