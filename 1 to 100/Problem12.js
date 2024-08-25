
function countDivisors(number) {
    let count = 0;
    const sqrt = Math.sqrt(number);
  
    for (let i = 1; i <= sqrt; i++) {
      if (number % i === 0) {
        count += 2; // i and number / i
      }
    }
  
    // If the number is a perfect square, adjust the count
    if (sqrt * sqrt === number) {
      count--;
    }
  
    return count;
  }
  function divisibleTriangleNumber(n) {
    let triangleNumber = 0;
    let i = 1;
  
    while (true) {
      triangleNumber += i;
      i++;
  
      if (countDivisors(triangleNumber) > n) {
        return triangleNumber;
      }
    }
  
  }
  
  console.log(divisibleTriangleNumber(500));