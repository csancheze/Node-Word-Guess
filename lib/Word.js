const Letter = require("./Letter");

class Word {
    constructor(wordInput) {
        this.letters = wordInput.split("").map(char=> new Letter(char));
    }

guessLetter(char) {
    let foundLetter = false;
    this.letters.forEach(letter => {
      if (letter.guess(char)) {
        foundLetter = true;
      }
    });
    return foundLetter

}

guessedCorrectly (){
    return this.letters.every(letter => letter.visible)
}

getSolution() {
    return this.letters
      // iterate over each letter and return the solution for each 
      // to form an array of solved letters
      .map(letter => letter.getSolution())
      .join(""); // create a string from the array of solved letters
  }

  // setting `toString()` as a method lets us concatenate it like we would a string!
  toString() {
    return this.letters.join(" "); // see Letter.prototype.toString in Letter.js
  }


}


module.exports = Word;
