/* Task 7 */

reverseString("anon");


function reverseString(str) {
  str = String(str);
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  console.log(newStr);
}

