/* Task 2 */

// showPrimeNumbers(100);



function showPrimeNumbers(n) {
  if (isNaN(n) || n <= 1) {
    console.log("The argument was invalid!");
  } else {
    nextIter:
    for (var i = 2; i <= n; i++) {
      for (var j = 2; j < i; j++) {
        if (i % j === 0) continue nextIter;
      }
      console.log(i);
    }
  }
}

