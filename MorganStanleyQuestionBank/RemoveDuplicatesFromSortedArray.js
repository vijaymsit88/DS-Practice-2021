//Leetcode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

var removeDuplicates = function(nums) {
    let dup = 1;
    
    for (let i = 1;i < nums.length;i++) {
        if(nums[i-1] !== nums[i]) {
            let temp = nums[dup];
            nums[dup] = nums[i];
            nums[i] = nums[dup];
            dup++;
        }
    }
    return dup;
};