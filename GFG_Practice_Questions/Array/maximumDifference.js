let array = [2, 3, 10, 6, 4, 8, 1]
//let array = [30, 10, 8, 2]
//let array = [7,9,5,6,3,2]
//let array = [10,20,30]
//let array = [30,20,10]

//Problem - Given an array, try to find the maximum difference between any 2 items for that array.

function maximumDifference(array) {
    let n = array.length;
    let maxDifference = array[1] - array[0];
    let minValue = array[0];
    let tempDiff;
    //Consider a min value. Whenever you see the difference is more than the previous maximum, then you update the minimum value.
    for (i = 1; i < n - 1; i++) { 
            tempDiff = array[i+1] - minValue;
            if (tempDiff > maxDifference) {
                maxDifference = tempDiff;
                minValue = array[i];
            }
    }
    console.log('Max Difference is: ' + maxDifference);
}
maximumDifference(array);