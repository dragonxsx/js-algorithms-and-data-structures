function fibonacci(num, memo = [undefined, 1, 1]) {
    if(memo[num]) return memo[num];
    
    const result = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    memo[num] = result;
    
    return result;
}

console.log(fibonacci(100));