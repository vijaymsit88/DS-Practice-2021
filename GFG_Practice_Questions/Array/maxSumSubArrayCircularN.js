//let array = [3,-4,5,6,-8,7]
let array = [5,-2,3,4]

//Step 1 Find max subarray of normal array
//Step 2 Then find max subarray of circular subarray -> Total sum of array - min subarray sum.
//Step 3 Then find max of both above arrays, you get your answer

function maxSumSubArrayCircularN(array) {
    let maxSum;
    let maxNormalSubArraySum = findMaxNormal(array, 0);

    //This means all elements are negative then no point of looking for circular elements.
    if(maxNormalSubArraySum < 0){
        maxSum = maxNormalSubArraySum;
        return;
    }
    //end


    //Find the total sum of all array elements.
    let totalArraySum = array.reduce((a,b) => a + b, 0);
    //end

    //Below we are computing the min sub array sum using the Kadane's algo
    let minCircularSubArraySum = findMaxNormal(array, 1);
    //Rather than doing this we could have also inverted all elements within this array and then we could have used the max Subarray method itself.
    //By inverting means making all elements of this array as negative.

    //Below we are finding the max Sub array sum of a circular array.
    let testVal = totalArraySum - minCircularSubArraySum;
    //end

    //Find max of the normal and circular sub array sum and you get your answer.
    maxSum = Math.max(maxNormalSubArraySum, testVal);

    console.log('Maximum sum of a sunarray in circular manner is: ' + maxSum);
}

maxSumSubArrayCircularN(array);

//Kadence algo to find max subarray
function findMaxNormal(array, mode) {
    let maxArray = []
    let res;
    let n = array.length;
    maxArray[0] = array[0];

    //If else wont be needed if we invert the array elements and call this method.
    for (let i = 1; i < n; i++) {
        if (mode === 0) {
            maxArray[i] = Math.max(array[i], maxArray[i - 1] + array[i]);
        } else {
            maxArray[i] = Math.min(array[i], maxArray[i - 1] + array[i]);
        }
    }

    if (mode === 0) {
        res = Math.max(...maxArray);
    } else {
        res = Math.min(...maxArray);
    }
    return res;
}