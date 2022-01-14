const numbers = [10, 5, 0, 0, 7, 0, 9, 0];

function moveZerosToTheEnd(array) {
    let count = 0;
    //count will keep track of all non zero numbers
    //for the begining non zero numbers, the count and i are same
    //as soon as we hit zeros the count stop increasing and i keeps on increasing to find non zero elements.
    for (i = 0; i < array.length; i++) {
        if(array[i]!==0){
            let temp = array[count];
            array[count] = array[i];
            array[i] = temp;
            count++;
        } 
    }

    console.log('New array is: ' + array);
}

moveZerosToTheEnd(numbers);

/* Another way
function moveZerosToTheEnd(array) {
    let zeroPointer = -1;
    for (i = 0; i < array.length; i++) {
        if(array[i]===0 && zeroPointer === -1){
            zeroPointer = i;
        } else if(zeroPointer!==-1 && array[i]!==0 ){
                array[zeroPointer] = array[i];
                array[i] = 0;
                zeroPointer++;
            }
    }

    console.log('New array is: ' + array);
}
*/