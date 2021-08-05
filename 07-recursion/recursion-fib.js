function fib(n){
    // add whatever parameters you deem necessary - good luck!  
    if (n === 1) return 1;
    if (n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));