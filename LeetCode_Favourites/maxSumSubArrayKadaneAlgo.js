var maxSubArray = function(nums) {
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        max = Math.max(max, sum);
        
        if(sum<0) sum = 0;
    }
    
    return max;
};

//this is an improved version of our previous Kadane's algo as it does not create an array in the begining.
//Solution url - https://leetcode.com/problems/maximum-subarray/discuss/1595097/JAVA-or-Kadane's-Algorithm-or-Explanation-Using-Image