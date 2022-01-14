const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    let i, j = 0
    let maxNode = null;
    //Each outer loop iteration tries to bubble up the largest/max node 
    //to the end of list. 
    for(i = 0; i < array.length; i++) {
        for(j = 1; j < array.length; j++) {
            //Consecutive nodes are compared with each other and max node
            //is shifted towards the right.
            if(array[j-1] > array[j]) {
                maxNode = array[j-1];
                array[j-1] = array[j];
                array[j] = maxNode;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);