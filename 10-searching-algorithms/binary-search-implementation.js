function binarySearch(arr, value) {
    let firstPosition = 0;
    let lastPosition = arr.length - 1;

    while(lastPosition >= firstPosition) {
        let middlePosition = Math.floor((firstPosition + lastPosition)/2);

        if(arr[middlePosition] < value) {
            firstPosition = middlePosition + 1;
        }
        
        if(arr[middlePosition] > value) {
            lastPosition = middlePosition - 1;
        }

          
        if(arr[middlePosition] == value) {
            return middlePosition;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 2));
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 3));
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4));
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 1));
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 9));
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 11));

