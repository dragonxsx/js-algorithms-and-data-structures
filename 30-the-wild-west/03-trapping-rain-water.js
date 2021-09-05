// https://leetcode.com/problems/trapping-rain-water/

// Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
// In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:
//     n == height.length
//     1 <= n <= 2 * 104
//     0 <= height[i] <= 105

function trap(nums) {
    const getMax = (arr) => {
        let max = 0;
        for(let num of arr) {
            max = Math.max(max, num);
        }
        return max;
    }

    let maxLeft = 0;
    let maxRight = 0;
    let currentHeight = 0;
    let currentWater = 0;
    let amountOfWater = 0;

    for (let i = 0; i < nums.length; i++) {
        currentHeight = nums[i];
        maxLeft = getMax(nums.slice(0, i+1));
        maxRight = getMax(nums.slice(i, nums.length));

        currentWater = Math.min(maxLeft, maxRight) - currentHeight;

        if (currentWater > 0) amountOfWater += currentWater;
    }

    return amountOfWater;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));

