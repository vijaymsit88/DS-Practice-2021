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
    //Consider a min value. Whenever you see the difference is more than the previous maximum, then you update the minimum value.
    for (let i = 1; i < n; i++) { 
        maxDifference = Math.max(maxDifference, array[i]- minValue);
        minValue = Math.min(minValue, array[i]);
    }
    console.log('Max Difference is: ' + maxDifference);
}
maximumDifference(array);