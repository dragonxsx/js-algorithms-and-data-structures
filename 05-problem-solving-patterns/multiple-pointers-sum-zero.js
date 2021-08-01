function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left],arr[right]];
        }

        if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-6, -4, -2, -1, 0, 1, 4, 8]));
console.log(sumZero([-7, -6, -4, -2, -1, 0, 1, 4, 6, 8]));