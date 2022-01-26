let array = [3, -4, 5, 6, -8, 7]
//let array = [5, 8, 3]
//let array = [-6, -1, -8]
//Problem: To find out sum of maximum sub array.

function maxSumSubArray(array) {
    let global_maxSum = array[0];
    let n = array.length;
    let temp_Sum, local_Max;
    for (i = 0; i < n; i++) {
        temp_Sum = array[i];
        local_Max = array[i];
        for (j = 1; j < n; j++) {
            //below index will help run the array in a circular manner.
            let index = (i + j) % n;
            temp_Sum += array[index]
            local_Max = Math.max(local_Max, temp_Sum);
        }
        global_maxSum = Math.max(local_Max, global_maxSum);
    }

    console.log("Max sum of Sub array is: " + global_maxSum);
}

maxSumSubArray(array);