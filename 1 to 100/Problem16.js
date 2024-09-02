function powerDigitSum(exponent) {
    // Calculate 2^exponent
    const number = BigInt(2 ** exponent).toString();

    // Convert the number to a string, split into digits, and sum them up
    let sum = 0;
    for (let digit of number) {
        sum += parseInt(digit);
    }

    return sum;
}

console.log(powerDigitSum(128));