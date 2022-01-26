let array = [1, 7, 2, 5, 2, 6, 2, 1, 7]

function sw_VariableWinSize_MaxSumSubarray(array, targetSum) {
    let j = 0;
    let sum = 0;
    let maxWinSize = 0;
    let i = 0;
    while (j < array.length) {
        //like fixed size below calculation needs to happen outside any if condition.
        sum += array[j];

        //If we hit the window, then find max window size.
        //In else part, if the sum has exceede the window size then we have to keep moving
        //the i to the right till the sum is below the target sum.
        if (sum === targetSum) {
            maxWinSize = Math.max((j - i + 1), maxWinSize);
        } else if (sum > targetSum) {
            while (sum > targetSum) {
                sum -= array[i];
                i++;
            }
            if (sum === targetSum) {
                maxWinSize = Math.max((j - i + 1), maxWinSize);
            }
        }
        j++;
    }
    console.log('Max window size is: ' + maxWinSize);
}

sw_VariableWinSize_MaxSumSubarray(array, 13);