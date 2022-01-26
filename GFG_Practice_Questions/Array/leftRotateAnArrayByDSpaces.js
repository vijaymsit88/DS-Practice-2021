let array = [1, 4, 5, 2, 6, 3, 11, 13, 15, 17, 12]

//[6, 3, 11, 13, 1, 4, 5, 2, 15, 17, 12]
//[6, 3, 11, 13, 15, 17, 12, 2, 1, 4, 5 ]

function leftRotateAnArrayByDSpaces(array, d) {
    let temp;
    let dPointer = d-1;
    let len = array.length;
    //Reverse the array from 0 to d-1
    for (i = 0; i < d/2 ; i++) {  
        reverseArray();      
    }
    //Reverse the array from d to n-1
    dPointer = len-1;
    for (i = d; i < d+(len-d)/2 ; i++) {  
        reverseArray();    
    }
    //Reverse the array from n to n-1
    dPointer = len-1;
    for (i = 0; i < len/2 ; i++) {  
        reverseArray();      
    }

    console.log('Left shifted array by D position is: ' + array);

    function reverseArray() {
        temp = array[i];
        array[i] = array[dPointer];
        array[dPointer] = temp;
        dPointer--;
    }
}

//O(n) - Time complexity
//O(1) - Space complexity.

leftRotateAnArrayByDSpaces(array, 1);