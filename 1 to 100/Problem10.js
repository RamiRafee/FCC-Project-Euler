function isPrime(number) {
    // Check if number is less than 2, not prime
    if (number < 2) return false;
  
    // Check from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function primeSummation(n) {
    let sum = 0;
    for (let i =0;i<n;i++){
      if (isPrime(i)){
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(primeSummation(2000000));