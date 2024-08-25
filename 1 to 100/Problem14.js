function collatzSequenceLength(n) {
    let length = 1; // Start with length 1 since n itself counts as the first term
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        length++;
    }
    return length;
}
function longestCollatzSequence(limit) {
    let maxLength = 0;
    let startingNumber = 0;

    for (let i = 1; i < limit; i++) {
        let currentLength = collatzSequenceLength(i);
        if (currentLength > maxLength) {
            maxLength = currentLength;
            startingNumber = i;
        }
    }

    return startingNumber;
}

console.log(longestCollatzSequence(14));