let array = [1, 2, -1, 2, 13, 6, 48, -4, 40, 20, -54, 17, 45]

function slidingWindow_1_FindMaxSubOfSubarray(arr,k) {
    
    let maxSum = arr[0];
    let sum = arr[0];
    let j = 1; // as we have assigned the first elements above.

    //We are using 2 pointers i & j,
    //i will tell us the starting element and 
    //j will tell us the end element of the window.
    for (i = 0; j < arr.length; j++) {
        sum += arr[j];
        //Window size condition is --> (j-i+1) === k, as soon as this is met
        //the results start making meaning to us and we do our logic.
        if((j-i + 1) === k) {
            maxSum = Math.max(sum, maxSum);
            sum -= arr[i];
            i++;
        }
    }
    console.log('Max sum of subArray within k window size is: ' + maxSum);
}

//k is the fixed window size
slidingWindow_1_FindMaxSubOfSubarray(array, 3);
