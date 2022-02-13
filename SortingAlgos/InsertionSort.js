const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let i,j,k = 0;
  for(i = 0; i < array.length; i++) {
      //A min node is selected.
      let min = array[i];
      let temp = null;
      let temp1 = null;
      //First for loop scans the previous items for a number greater than min node
      for(j = 0; j < i; j++) {
        if(min < array[j]) {
            temp = array[j];
            array[j] = min;
            break;
        }
      }
      //Once that position is found, then insertion and array reshuffling happens.
      for(k = j+1; k<=i; k++) {
        temp1 = array[k];
        array[k] = temp;
        temp = temp1;
      }
  }
}

insertionSort(numbers);
console.log(numbers);