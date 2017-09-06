
//Decaring vars for global use

var letterCount;
var letter;
var output = { //decares my object
      letter: letter,
      count: letterCount
    };


function countLetters(str) {

  str = str.toLowerCase().split(" ").join(""); //makes it a single array

  for (var i = 0; i < str.length; i++) { //seperates letters and sends them to comapreLetters

    letterCount = 0; //resets lettercount
    letter = str[i];

    compareLetters(letter, str);

    output['letter'] = letter;// adds values to object
    output['count'] = letterCount;

    console.log(output);

  }

}

function compareLetters(letter, str) { //compares the letters

  for (var x = str.length - 1; x >= 0; x--) {

    var letterTwo = str[x];

    if (letterTwo == letter) {

      letterCount += 1; //adds to the count for every duplicate.

    }
  }
}

countLetters("lighthouse in the house")
