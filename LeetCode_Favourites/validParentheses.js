//URL https://leetcode.com/problems/valid-parentheses/submissions/
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.


var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
           stack.push(')'); 
        } else if(s[i] === '{') {
            stack.push('}');
        } else if(s[i] === '[') {
            stack.push(']')
        } else if(stack.length === 0 || stack.pop() !== s[i]) {
            return false;
        }
    }
    return stack.length === 0;
};