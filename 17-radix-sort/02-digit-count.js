function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(1));
console.log(digitCount(023));
console.log(digitCount(245));
console.log(digitCount(-23123));