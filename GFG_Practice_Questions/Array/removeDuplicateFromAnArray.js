const numbers = [10,20,20,30,30,30];

function removeDuplicateFromAnArray(array) {
    let uniqueNumbers = {};
    let len = array.length;
    for (i = 0; i < len; i++) {
        if (!uniqueNumbers[array[i]]) {
            uniqueNumbers[array[i]] = 1;
        } else {
            array.splice(i,1);
            len = len - 1;
            i = i - 1;
        }
    }
    console.log('New array is: ' + array)
}

removeDuplicateFromAnArray(numbers);

//As the array is sorted, another solution can be to create another array and only copy unique values into it.
//More efficient solution would be, rather than creating a new array, use the current array to copy uinque values into.