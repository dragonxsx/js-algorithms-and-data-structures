function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);

        if(array[middle] < val) {
            min = middle + 1;
        }

        if(array[middle] > val) {
            max = middle - 1;
        }

        if(array[middle] == val) {
            return middle;
        }
    }

    return -1;
}

console.log(search([1,2,4,5,6,7,8,14,18,19,20,30,45,56,69,122,195,246,563,1923], 69));
console.log(search([1,2,4,5,6,7,8,14,18,19,20,30,45,56,69,122,195,246,563,1923], 1923));
console.log(search([1,2,4,5,6,7,8,14,18,19,20,30,45,56,69,122,195,246,563,1923], 1));
console.log(search([1,2,4,5,6,7,8,14,18,19,20,30,45,56,69,122,195,246,563,1923], 134));