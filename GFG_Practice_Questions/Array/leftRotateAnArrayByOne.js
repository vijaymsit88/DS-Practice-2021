let array = [1, 4, 5, 2, 6, 3]

function leftRotateArrayByOne(array) {
    let temp = array[0];
    for (i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array[array.length - 1] = temp;
    console.log('New array is: ' + array);
}

leftRotateArrayByOne(array);