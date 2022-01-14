const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function checkIfArrayIsSorted(array) {
    let isSorted = "Yes";
        for (i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                isSorted = "No";
                break;
            }
        }
    console.log('Is given array sorted: ' + isSorted);
}

checkIfArrayIsSorted(numbers);