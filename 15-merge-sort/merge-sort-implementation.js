function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    const mergedArray = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    mergedArray.push(
        ...arr1.slice(i, arr1[arr1.length]),
        ...arr2.slice(j, arr2[arr2.length])
    );
    
    return mergedArray;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([1,2,7,8,9,2,4,6,8,10,19,20]));