let array = [2, 3, -8, 7, -1, 2, 3]
//let array = [5, 8, 3]
//let array = [-6, -1, -8]
//Problem: To find out sum of maximum sub array.

function maxSumSubArray(array) {
    let maxSum = array[0];
    let tempMax;
    for (let i = 0; i < array.length; i++) {
        tempMax = 0;
        for (let j = i; j < array.length; j++) {
            tempMax += array[j];
            if (tempMax >= maxSum) {
                maxSum = tempMax;
            }
        }
    }
    console.log("Max sum of Sub array is: " + maxSum);
}

maxSumSubArray(array);