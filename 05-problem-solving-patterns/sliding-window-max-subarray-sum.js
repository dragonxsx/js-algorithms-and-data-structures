function maxSubarraySum (arr, n) {
    let max = 0;
    let tempSum = 0;

    if (arr.length < n) {
        return null;
    }

    for(let i = 0; i < n; i++) {
        max += arr[i];
    }

    tempSum = max;

    for(let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        max = Math.max(max, tempSum);
    }

    return max;
}

console.log(maxSubarraySum([1,2,3,4],5));
console.log(maxSubarraySum([1,2,3,4],4));
console.log(maxSubarraySum([1,2,3,4,2,3,4,2,3,4,5,6,4,4,54,4,5,4,54,5,3,2,2,34,4,23,4,234,234,23,4,4,3,34,3,3,34],10));