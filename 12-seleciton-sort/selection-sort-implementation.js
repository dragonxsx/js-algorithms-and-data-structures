function selectionSort(arr) {
    const swap = (arr, indx1, indx2) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    }

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) lowest = j;
        }
        if(i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}

console.log(selectionSort([312,3,2,1,323,4,1,4,6,3,8]));