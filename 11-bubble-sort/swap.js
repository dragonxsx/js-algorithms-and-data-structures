// ES5
function swap1(arr, indx1, indx2) {
    var temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}

// ES2015
const swap2 = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
}

const arr = [1,2,3,4,5,6,7,8,9,10];
swap1(arr, 1, 5);
console.log(arr);
swap2(arr, 1, 5);
console.log(arr);