let array = [2, 3, -8, 7, -1, 2, 3]
//let array = [5, 8, 3]
//let array = [-6, -1, -8]
//Problem: To find out sum of maximum sub array.

function maxSumSubArray(array) {
    let maxArray = [];
    //Kadane's algorithm.
    //Create an array that stores maximum sum that can be achieved uptill every entity within parent array.
    //Whenever we move to next entry , we have 2 choices- 1. Take the new entry or add the current entry to 
    //just previous highest sum.
    //Then find the maximum out of the secondary array anmorgand you got your answer.
    maxArray[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        maxArray[i] = Math.max(array[i], array[i] + maxArray[i-1]);
    }
    console.log("Max sum of Sub array is: " + Math.max(...maxArray));
}

maxSumSubArray(array);

// Improved Kadane with O(1) space, above approach takes O(n) space.
var maxSubArray = function(nums) {
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        
        if(sum<0) sum = 0;
    }
    
    return max;
};