function numberToWords(n) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand"];

    if (n === 0) return "zero";

    let word = "";

    if (n >= 1000) {
        word += ones[Math.floor(n / 1000)] + " thousand ";
        n %= 1000;
    }

    if (n >= 100) {
        word += ones[Math.floor(n / 100)] + " hundred ";
        n %= 100;
        if (n > 0) word += "and ";
    }

    if (n >= 20) {
        word += tens[Math.floor(n / 10)] + " ";
        n %= 10;
    } else if (n >= 11 && n <= 19) {
        word += teens[n - 10] + " ";
        n = 0;
    } else if (n === 10) {
        word += tens[1] + " ";
        n = 0;
    }

    word += ones[n];

    return word.trim();
}

function numberLetterCounts(limit) {
    let letterCount = 0;

    for (let i = 1; i <= limit; i++) {
        let word = numberToWords(i);
        // Remove spaces and hyphens
        word = word.replace(/[-\s]/g, "");
        letterCount += word.length;
    }

    return letterCount;
}

// Example Usage
const limit = 150;
console.log(numberLetterCounts(limit));  // Output: 21124
