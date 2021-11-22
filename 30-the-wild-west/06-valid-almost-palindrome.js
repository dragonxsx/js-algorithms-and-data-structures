// Given a string, determine if it is almost a palindrome.
// A string is almost a palindrome if it becomes a palindrome by removing 1 letter.
// Consider only alphanumeric characters and ignore case sensitivity.

// Test cases
// "race a car" => true
// "abccdba" => true
// "abcdefdba" => false
// "" => true
// "a" => true
// "ab" => true

const isValidPalindrome = function (s, left, right) {
    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

const isAlmostPalindrome = function (s) {
    s = s.replace(/[^A-za-z0-9]/g, '').toLowerCase();

    let left = 0; right = s.length - 1;
    while(left < right) {
        if(s[left] != s[right]) {
            return isValidPalindrome(s, left + 1, right) || isValidPalindrome(s, left, right - 1);
        }

        left++;
        right--;
    };

    return true;
}

// Time: O(n)
// Space: O(1)

console.log(isAlmostPalindrome('race a car'));
console.log(isAlmostPalindrome('abccdba'));
console.log(isAlmostPalindrome('abcdefdba'));
console.log(isAlmostPalindrome(''));
console.log(isAlmostPalindrome('ab'));
console.log(isAlmostPalindrome('a'));