function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
      for (let a = 1; a < sumOfabc / 3; a++) {
       for (let b = a + 1; b < sumOfabc / 2; b++) {
         let c = sumOfabc - a - b;
         if (a * a + b * b === c * c) {
           return a * b * c;
         }
       }
     }
   
   }
   
   console.log(specialPythagoreanTriplet(24));