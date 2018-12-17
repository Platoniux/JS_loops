/* Task 3 */

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("FizzBuzz " + i);
    } else {
      console.log("Fizz " + i);
    }
  }
  if ((i % 5 === 0) && (i % 3 !== 0)) {
    console.log("Buzz " + i);
  }
}