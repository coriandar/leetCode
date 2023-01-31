    /** Theory
     * Check either half of input
     * Move 125 to 521
     * start by rev = 125 % 10 = 5
     * then num = 125 / 10 = 12 (floor)
     * then next 5 * 10 = 50, bring into tens
     * then rev = 50 + (12 % 10) = 52
     * then num = 12 / 10 = 1 (floor)
     * loop end here as (num > rev) is not true
     * but continuing...
     * rev = 52 * 10 + (1 % 10) = 521
     * then num = 1 / 10 = 0 (floor)
     * 125 !== 521
     */

const isPalindromeThinkFWD = (x) => {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    if (x < 10) return true;

    let rev = 0;
    // i = 121, then 12, then 1
    for (let i = x; i >= 1; i = Math.floor(i / 10)) {
        rev = rev * 10 + (i % 10);
    }

    return x === rev;
}

const isPalindromeLeet = (num) => {
    // alternative rebuild number from right to left
    // checks each half

    if (num < 0) {
        return false;
    }

    // 150 % 10 === 0
    if (num % 10 === 0 && num !== 0) {
        return false;
    }

    // 9
    if (num < 10) {
        return true
    }

    let reversed = 0;
    // num = 121
    // if num 125, stops when rev = 52
    while (num > reversed) {
        reversed = reversed * 10 + (num % 10);
        // reversed = 0 * 10 + (121 % 10) = 1
        // reversed = 1 * 10 + (12 % 10) = 12

        num = Math.floor(num / 10);
        // num = 12
        // num = 1
    }
    // for even || for odd
    return num === reversed || num === Math.floor(reversed / 10);
}

const isPalindromeNeet = (x) => {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }

    // if 121

    //find divisor
    // div = 100
    let div = 1;
    while (x >= div * 10) {
        div *= 10;
    }

    while (x != 0) {
        // left = 121 % 10 = 1
        let right = x % 10;
        // right = 121 / 100 = 1
        let left = Math.floor(x / div);

        // run1: 1 === 1
        // run2: 2 === 2
        // run3: 1 === 1
        if (left !== right) {
            return false;
        }

        // run1: x = 121, div = 100
        // run2: x = 2, div = 1
        x = Math.floor((x % div) / 10);
        div /= 100;
    }
    return true;
};