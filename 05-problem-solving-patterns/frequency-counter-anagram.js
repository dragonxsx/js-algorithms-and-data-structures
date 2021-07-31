// O(n)
function validAnagram(string1, string2){
    // add whatever parameters you deem necessary - good luck!
    if(string1.length !== string2.length) {
        return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for (let char of string1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    
    for (let char of string2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
    
    for(let char in frequencyCounter1) {
        if (frequencyCounter1[char] !== frequencyCounter2[char]) {
            return false;
        }
    }
    
    return true;
}

// O(n)
// Reduced memory with 1 object
// 2 loops
function validAnagram1(string1, string2){
    // add whatever parameters you deem necessary - good luck!
    if(string1.length !== string2.length) {
        return false;
    }
    
    let lookup = {};
    
    for (let char of string1) {
        lookup[char] = (lookup[char] || 0) + 1;
    }
    
    for(let char of string2) {
        if (!lookup[char]) {
            return false;
        }
        lookup[char] -= 1;
    }
    
    return true;
}

console.log(validAnagram1('blabla', 'blablo'));
console.log(validAnagram1('qwerty', 'ytrqwe'));

