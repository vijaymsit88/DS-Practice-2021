//Given a string s, return the longest palindromic substring in s.
//url https://leetcode.com/problems/longest-palindromic-substring/
//bruteforce O(N^3)
var longestPalindrome = function(s) {
    let j = s.length-1;
    let longestSubstring = '';
    
    for(let i = 0; i < s.length; i++) {
        for(let j = s.length - 1; j >= i ; j--) {
           if(s[i] === s[j]) {
            let l = i;
            let r = j;
            while(l <= r) {
                if(s[++l] !== s[--r]){
                    break;
                }
            }
            if(l >= r){
                if(s.substring(i,j+1).length > longestSubstring.length) {
                    longestSubstring = s.substring(i,j+1);
                }
            }
        }
        }
    }
    return longestSubstring;
};


//Optimized O(N^2)
//start from a character and then look left and right for it to be a palindrome.
var longestPalindromeOptimized = function(s) {
    let longestSubstring = '';
    
    for(let i = 0; i < s.length; i++) {
        //odd total character case
        let l = i;
        let r = i;
        longestSubstring = findPalindromrItemWise(s, l, r, longestSubstring);
        
        //even total character case
        l = i;
        r = i+1;
        longestSubstring = findPalindromrItemWise(s, l, r, longestSubstring);
    }
    return longestSubstring;
};

function findPalindromrItemWise(s, l, r, longestSubstring) {
     while(l>=0 && r<=s.length-1 && s[l] === s[r]) {
            if(r-l+1 > longestSubstring.length) {
                longestSubstring = s.substring(l,r+1);
            }
            l--;
            r++;
        }
    return longestSubstring;
}

console.log(longestPalindrome("cbbd"))