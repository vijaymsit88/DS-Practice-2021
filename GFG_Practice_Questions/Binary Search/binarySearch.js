let array = [1, 4, 14, 15, 18, 23, 32, 45, 54, 64]

function binarySearch(array, el) {
    let n = array.length;
    let start = 0;
    let end = n - 1;
    let middleElIndex;
    let middleEl;
    let foundIndex = -1;

    while (start <= end) {
        middleElIndex = parseInt((end + start) / 2);
        middleEl = array[middleElIndex];
        if (middleEl === el) {
            foundIndex = middleElIndex;
            break;
        } else if (middleEl > el) {
            end = middleElIndex - 1;
        } else if (middleEl < el) {
            start = middleElIndex + 1;
        }
    }

    console.log('Index found at is: ' + foundIndex);
}

binarySearch(array, 100)