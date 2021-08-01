function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < 2) {
        return arr.length;
    }
    
    let i = 0, j = 1;
    let counter = 1;
    
    while(j < arr.length && i < arr.length) {
        if(arr[i] !== arr[j]) {
            counter++;
        }
        
        if(i < j) {
            i = j + 1;
        } else {
            j = i + 1
        }
    }
    
    return counter;
}

function countUniqueValues1(arr){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < 2) {
        return arr.length;
    }

    let counter = 1;
    
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i+1]) {
            counter++;
        }
    }
    
    return counter;
}

console.log(countUniqueValues1([1,1,1,1,1,1,1,1,2]));
console.log(countUniqueValues1([1,2,3,3,3,4,5,5,7]));
console.log(countUniqueValues1([]));
console.log(countUniqueValues1([1,1]));
console.log(countUniqueValues1([1,1,2,2,3,3,4,4]));