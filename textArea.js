

function TextAreaClass() {


    this.oneDimArray2 = [];

    this.displayTextBoxCopy = function(){

        this.makeOneDimArrayWithoutCommas();
        
}
      

    //draw characters in textarea
    this.makeOneDimArrayWithoutCommas = function() {
        
        let value1 = nestedArray[0][3];
        
        let j = 0;
        
        
        this.oneDimArray2.length = 0;

        for (let i = 0; i < 35; i = i + 1) {
          //rows
          for (let j = 0; j < 35; j = j + 1) {
            this.oneDimArray2.push(nestedArray[i][j]);
            
          }
        }

        console.log("od2: ", this.oneDimArray2);
        console.log("na1: ", nestedArray);

        document.getElementById("mytext").value = this.oneDimArray2.join("");
        console.log("1a ", document.getElementById("mytext").value);

        
        console.log("na2: ", nestedArray);
      }


}

let TextArea = new TextAreaClass();