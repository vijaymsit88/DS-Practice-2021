const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function largestNumber(array) {
let maxNumner = array[0];
let maxIndex = 0;
for(i = 1; i < array.length; i++){
    if(maxNumner < array[i]) {
        maxNumner = array[i];
        maxIndex = i;
    }
}
console.log('Max Number is: ' + maxNumner + ' and max Index is: ' + maxIndex)
}

largestNumber(numbers);