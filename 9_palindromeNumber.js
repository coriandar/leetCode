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
    
    return num === reversed || num === Math.floor(reversed / 10);
}