// Given a string, determine if it is a palindrome,
// considering only alphanumeric characters and ignoring case sensitivity

// Test cases
// "" => true
// "a" => true
// "aa" => true
// "abcba" => true 
// "a man, a plan, a canal: Panama"  => true
// "abc" => false

const isValidPalindrome = function (s) {
    s = s.replace(/[^A-za-z0-9]/g, '').toLowerCase();
    
    let left = 0; right = s.length - 1;
    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isValidPalindrome(''));
console.log(isValidPalindrome('a'));
console.log(isValidPalindrome('aa'));
console.log(isValidPalindrome('abcba'));
console.log(isValidPalindrome('a man, a plan, a canal: Panama'));
console.log(isValidPalindrome('"abc"'));
