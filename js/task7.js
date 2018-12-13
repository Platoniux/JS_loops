/* Task 7 */

function reverseString(str) {
  str = String(str);
  var position = str.length - 1;
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    newStr = newStr + str[position];
    position--; 
  }
  console.log(newStr);
}

// reverseString(true);