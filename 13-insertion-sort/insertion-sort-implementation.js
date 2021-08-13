function selectionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j;
        for(j = i - 1; (j >= 0 && arr[j] > currentValue); j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(selectionSort([1,72,3,4,35,4,5,23,1,1,5]));