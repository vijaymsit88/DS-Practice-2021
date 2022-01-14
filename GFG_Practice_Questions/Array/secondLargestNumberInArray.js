const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function secondLargestNumber(array) {
let maxNumner = array[0];
let secondLargest = -1;
let secondLargestIndex = -1;
let maxIndex = 0;
for(i = 1; i < array.length; i++){
    if(maxNumner < array[i]) {  
        //Saving the largest as second largest.
        secondLargest = maxNumner;
        secondLargestIndex = maxIndex;
        maxNumner = array[i];
        maxIndex = i;
    }
}
console.log('Second Largest Number is: ' + secondLargest + ' and Index is: ' + secondLargestIndex)
}

secondLargestNumber(numbers);