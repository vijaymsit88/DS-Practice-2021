const numbers = [10,20,20,30,30,30];

function removeDupFromSortedArray(array) {
    let dupPointer = 1;
    //As 1st position is never a duplicate so we start from 1.
    //Keep track of the duplicate value with dupPointer and then copy the new found unique value to it as soon as you find it.
    for (let i = 1; i < array.length; i++) {
        if(array[i]!==array[dupPointer-1]){
            array[dupPointer] = array[i];
            dupPointer++;
        } 
    }
    console.log('New array is: ' + array + ' and array size is: ' + dupPointer)
}

removeDupFromSortedArray(numbers);``

//As the array is sorted, another solution can be to create another array and only copy unique values into it.
//More efficient solution would be, rather than creating a new array, use the current array to copy uinque values into.