// Time O(n^2)
// Space O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    for (let p1 = 0; p1 < nums.length; p1++) {
        for (let p2 = p1 + 1; p2 < nums.length; p2++) {
            if (nums[p1] + nums[p2] === target) {
                return [p1, p2]
            }
        }
    }

    return null
}

console.log(twoSum([1, 3, 5, 7, 8], 15))
console.log(twoSum([1, 3, 5, 7, 12], 15))
console.log(twoSum([1, 9], 15))
console.log(twoSum([1], 15))
console.log(twoSum([], 15))