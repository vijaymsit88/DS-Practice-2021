const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Chota dhund ke aahe rakh do
function selectionSort(array) {
    let i, j = 0;
    let minNode = null;
    let temp = null;
    let swapPos = null;
    for (i = 0; i < array.length; i++) {
        //The first loop selects a minimum node
        minNode = array[i];
        //The second loop check if any other node in this array is smaller than
        //current node. If found then swapping happens between new min and prev min node.
        for (j = i + 1; j < array.length; j++) {
            if (minNode > array[j]) {
                minNode = array[j];
                swapPos = j;
            }
        }
        temp = array[i];
        array[i] = minNode;
        array[swapPos] = temp;
    }
}
selectionSort(numbers);
console.log(numbers);