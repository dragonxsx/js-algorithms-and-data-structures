function bubbleSort1(arr) {
    const swap = (arr, indx1, indx2) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
        console.log('ONE PASS COMPLETE'); 
    }

    return arr;
}

// Reduce last swap on each iteration by inverting i loop
function bubbleSort2(arr) {
    const swap = (arr, indx1, indx2) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    }

    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
        console.log('ONE PASS COMPLETE'); 
    }

    return arr;
}

// Add swap check, if no swap happens in an iteration, break the loop
function bubbleSort3(arr) {
    const swap = (arr, indx1, indx2) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    }

    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        console.log('ONE PASS COMPLETE'); 
        if (noSwaps) break;
    }

    return arr;
}

let array = [12,45,36,3,2,12,2,4,-1];
console.log(bubbleSort2(array));

let array1 = [1,2,3,4,5,6,7,100, 23, 34]
console.log(bubbleSort3(array1));
