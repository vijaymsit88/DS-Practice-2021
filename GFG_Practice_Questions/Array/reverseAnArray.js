const numbers = [99, 44, 6, 2, 1, 63, 87, 283, 4, 0];

function reverseAnArray(array) {
    let temp;
    let len = array.length;
    for (i = 0; i < len / 2; i++) {
        temp = array[i];
        array[i] = array[len - i - 1];
        array[len - i - 1] = temp;
    }
    console.log('Reversed array is: ' + array);
}

reverseAnArray(numbers);