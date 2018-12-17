/* Task 6 */

// console.log(fibbonachi(3));
// console.log(fibbonachiLoop(77));





function fibbonachi(n) {
  if (n < 2) return n;
  return fibbonachi(n - 1) + fibbonachi(n - 2);
}

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

