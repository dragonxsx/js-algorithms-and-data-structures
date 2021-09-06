// https://leetcode.com/problems/backspace-string-compare/
// Backspace String Compare
// Given two strings s and t, 
// return true if they are equal when both are typed into empty text editors. 
// '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a##c", t = "#a#c"
// Output: true
// Explanation: Both s and t become "c".

// Example 4:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:
//     1 <= s.length, t.length <= 200
//     s and t only contain lowercase letters and '#' characters.

// Follow up: Can you solve it in O(n) time and O(1) space?

var backspaceCompare = function(s, t) {
    const getOutputString = (str) => {
        let outputStr = "";
        for(let char of str) {
            if(char !== "#") {
                outputStr = outputStr.concat(char);
            } else {
                outputStr = outputStr.substr(0, outputStr.length - 1);
            }
        }
        return outputStr;
    }

    const sOutStr = getOutputString(s);
    const tOutStr = getOutputString(t);

    if(sOutStr !== tOutStr) {
        return false;
    }

    return true;
};

// console.log(backspaceCompare("ab#c", "ad#c"));
// console.log(backspaceCompare("ab##", "c#d#"));
// console.log(backspaceCompare("a##c", "#a#c"));
// console.log(backspaceCompare("a#c", "b"));

// Big O Notation
// Time: O(m+n)
// Space: O(m+n)

// Optimization
var backspaceCompare1 = function(s, t) {
    let sPointer = s.length - 1;
    let tPointer = t.length - 1;

    while(sPointer >= 0 || tPointer >= 0) {
        let sHashCount = 0;
        let tHashCount = 0;

        while(s[sPointer] === "#") {
            sHashCount++;
            sPointer--;
        }
        
        while(sHashCount > 0) {
            if (s[sPointer] !== "#") {
                sHashCount--;
                sPointer--;
            }
            
            if (s[sPointer] === "#") {
                sHashCount++;
                sPointer--;
            }
        }
        
        while(t[tPointer] === "#") {
            tHashCount++;
            tPointer--;
        }
        
        while(tHashCount > 0) {
            if (t[tPointer] !== "#") {
                tHashCount--;
                tPointer--;
            }

            if(t[tPointer] === "#") {
                tHashCount++;
                tPointer--;
            }
        }

        if(s[sPointer] !== t[tPointer]) {
            return false;
        }

        sPointer--;
        tPointer--;
    }

    return true;
}

console.log(backspaceCompare1("ab#c", "ad#c"));
console.log(backspaceCompare1("ab##", "c#d#"));
console.log(backspaceCompare1("a##c", "#a#c"));
console.log(backspaceCompare1("a#c", "b"));

// Big O Notation
// Time: O(m+n)
// Space: O(1)