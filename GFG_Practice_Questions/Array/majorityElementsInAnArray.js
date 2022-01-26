let array = [3, 3, 2, 1, 3, 2, 2]
//let array = [30, 10, 8, 2]
//let array = [7,9,5,6,3,2]
//let array = [10,20,30]
//let array = [30,20,10]

//Problem - Given an array, try to find the maximum difference between any 2 items for that array.

function findIndexOfMajorityElement(array) {
    let freqDict = {}
    let n = array.length;
    let res = -1;
    for (let i = 0; i < n; i++) {
        if (freqDict[array[i]]) {
            freqDict[array[i]] += 1;
            if (freqDict[array[i]] > n/2) {
                res = i;
            }
        } else {
            freqDict[array[i]] = 1;
        }
    }

    console.log('Max Difference is: ' + res);
}
findIndexOfMajorityElement(array);