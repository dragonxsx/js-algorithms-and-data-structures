// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0

// Constraints:
//     0 <= s.length <= 5 * 104
//     s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = function(s) {

    if(s.length <= 1) return s.length;

    const seenMap = {};
    let longest = 0;
    let left = 0;

    for(let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const previosSeenChar = seenMap[currentChar];

        if(previosSeenChar >= left) {
            left = previosSeenChar + 1;
        }

        seenMap[currentChar] = right;

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};

// BigO
// Time: O(n)
// Space: O(n)

console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("a")); // 1
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
