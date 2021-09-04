function fibonacci(num) {
    if(num <= 2) return 1;
    let fibNumbs = [0,1,1];
    for(var i = 3; i <= num; i++) {
        fibNumbs[i] = fibNumbs[i-1] + fibNumbs[i-2];
    }
    return fibNumbs[num];
}

console.log(fibonacci(100));
