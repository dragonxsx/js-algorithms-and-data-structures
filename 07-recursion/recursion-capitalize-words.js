function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) {
        return arr;
    }
    
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));