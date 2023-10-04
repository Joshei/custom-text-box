//9/27/23 : rewritten not tested yet, all set!

class ReturnClass {
 
  constructor(){
    //so that all can go on one row
    let lastLetterPos = 0
  }
 
  //if row is complete with insert than add text to to next line

  Return() {
    let tempArray = JSON.parse(JSON.stringify(nestedArray))
    let hp = horizontalCursorPosition/5
    //push everything down starting on line after current vertical position
    for (let y = (verticalCursorPosition / 10); y < HEIGHT - 1; y++) {
      for (let x = hp; x < WIDTH; x++) {
        let newValue = nestedArray[y][x] // sets 10 times
        tempArray[y + 1][(x - hp)] = newValue
      }    
    hp = 0;  
    }
    nestedArray = [...tempArray]
    //find the index of the last character on row not including the empty : '-'
    this.FindLastletterPositionOnRow()
    //deletes characters that are not left behind by pressing enter in the text
    this.removeCharactersOnRightOnActiveLine()
    drawGrid()
    //advances vertical position to next row where cursor will be
    verticalCursorPosition = verticalCursorPosition + 10
    horizontalCursorPosition = 0;
    CursorMovements.drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    )
  }
 
  //Remove characters if the return is not at the very beginning position : 0
  removeCharactersOtherThanAll(index){
  if (horizontalCursorPosition/5 == index)
        {
          for(let x = index; x <= this.lastLetterPos; x++)
          {
            nestedArray[verticalCursorPosition / 10][x] = 'C'
          }
        }
      }
  
  //removes all the text when return is used at the very start of position zero.
  removeCharactersOnRightOnActiveLine() {
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
  //find last non '_' character on current row
 FindLastletterPositionOnRow(){
  for(let x = 0; x < WIDTH ; x++){
    if(nestedArray[verticalCursorPosition/10][x] !== '-' )
    {
      this.lastLetterPos = x;
    }
  }
 }
 /*
 //replace removed content on return from row.  A space is issued by the letter B.
 displayFirstRowCharacters(){
  let nullSpaces = WIDTH - 1  -  this.lastLetterPos   
  console.log({nullSpaces});
  for (let x = 0   ; x< nullSpaces ; x++ ){
    console.log({x}, {nullSpaces})
  nestedArray[verticalCursorPosition/10+ 1][x] = 'B'
  console.log(nestedArray[verticalCursorPosition/10 - 1][x])
}
}
*/
}
