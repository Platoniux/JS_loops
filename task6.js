/* Task 6 */

function fibbonachi(n) {
  var result;
  if (n < 2) return n;
  result = fibbonachi(n - 1) + fibbonachi(n - 2);
  return result;
}

// console.log(fibbonachi(3));

function fibbonachiLoop(n) {
  if (n < 2) return n;
  var x = 1;
  var y = 0;
  for (var i = 0; i < n; i++) {
    x = x + y;
    y = x - y;
  }
  return y;
}

// console.log(fibbonachiLoop(77));