/* Task 4 */

function numberOfLetterInString(str, letter) {
  str = str.toLowerCase();
  letter = letter.toLowerCase();
  var pos = 0;
  for (var i = 0; i < str.length; i++) {
    var positionOfLetter = str.indexOf(letter, pos);
    if (positionOfLetter == -1) break;
    pos = positionOfLetter + 1;
  }
  console.log(i);
}

// numberOfLetterInString("WhAt We dO was", "w");