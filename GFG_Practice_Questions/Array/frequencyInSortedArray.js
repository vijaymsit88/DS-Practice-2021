const numbers = [10, 10, 10, 25, 30, 30];

function frequencyInSortedArray(array) {
    let count = 1;
    //compare each element with previous one (as its a sorted array) then keep incrementing the count untill you hit a different number.
    for (i = 1; i <= array.length; i++) {
        if (array[i] === array[i-1]) {
            count++;
            continue;
        }
        console.log('Frequency of ' + array[i-1] + ' is: ' + count)
        count = 1;
    }
}

frequencyInSortedArray(numbers);