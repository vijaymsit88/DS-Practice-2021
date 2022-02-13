function checkPalindrome(str) {
    let isPalindrome = true;
    let arr = str.split('');
    let n = arr.length;
    let j = n - 1;
    let i = 0;

    while (i <= j) {
        if (arr[i] !== arr[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }

console.log('Is string palindrome? : ' + isPalindrome);
}

checkPalindrome("ABCDCBA")