// Time O(n^2)
// Space O(1)

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let maxArea = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = Math.min(height[i], height[j]) * (j - i);
            maxArea = Math.max(area, maxArea);
        }
    }

    return maxArea
};

console.log(maxArea([7, 1, 2, 3, 9]));
console.log(maxArea([6, 9, 3, 4, 5, 8]));
console.log(maxArea([]));
console.log(maxArea([1]));