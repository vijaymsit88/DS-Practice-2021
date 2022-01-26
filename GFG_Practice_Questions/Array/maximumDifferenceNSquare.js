//let array = [2, 3, 10, 6, 4, 8, 1]
let array = [30, 10, 8, 2]

function maximumDifferenceNSquare(array) {
    let n = array.length;
    let maxDifference = array[1] - array[0];
    let tempDiff;
    for (i = 0; i < n - 1; i++) { 
        for (j = i+1; j < n; j++) {
            tempDiff = array[j] - array[i];
            if (tempDiff > maxDifference) {
                maxDifference = tempDiff
            }
        }
    }
    console.log('Max Difference is: ' + maxDifference);
}
maximumDifferenceNSquare(array);