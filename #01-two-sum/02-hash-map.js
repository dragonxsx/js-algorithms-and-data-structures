// Time O(n)
// Space O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] >= 0) {
            return [map[nums[i]], i]
        }
        const numberToFind = target - nums[i]
        map[numberToFind] = i
    }

    return null
}

console.log(twoSum([1, 3, 5, 7, 8], 15))
// console.log(twoSum([1, 3, 5, 7, 12], 15))
// console.log(twoSum([1, 9], 15))
// console.log(twoSum([1], 15))
// console.log(twoSum([], 15))