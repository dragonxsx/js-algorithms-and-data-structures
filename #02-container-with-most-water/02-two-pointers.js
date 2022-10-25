// Time O(n)
// Space O(1)

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let maxArea = 0
    let i = 0
    let j = height.length - 1
    while (i < j) {
        const area = Math.min(height[i], height[j]) * (j - i);
        maxArea = Math.max(area, maxArea);

        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }

    return maxArea
};

console.log(maxArea([7, 1, 2, 3, 9]));
console.log(maxArea([6, 9, 3, 4, 5, 8]));
console.log(maxArea([]));
console.log(maxArea([1]));