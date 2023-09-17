function TextAreaClass() {
    this.oneDimArray2 = [];
    this.displayTextBoxCopy = function(){
        this.makeOneDimArrayWithoutCommas();
}
    //draw characters in textarea
    this.makeOneDimArrayWithoutCommas = function() {
        this.oneDimArray2.length = 0;
      alert("here!");
        for (let i = 0; i < HEIGHT; i = i + 1) {
          //rows
          for (let j = 0; j < WIDTH; j = j + 1) {
            this.oneDimArray2.push(nestedArray[i][j]);
          }
      }
      console.log("check this: ", this.oneDimArray2);
        //sends over to other textarea
        document.getElementById("mytext").value = this.oneDimArray2.join("");
      }
}
let TextArea = new TextAreaClass();