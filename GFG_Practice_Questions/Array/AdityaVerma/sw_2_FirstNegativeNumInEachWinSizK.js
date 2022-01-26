let array = [1, 2, -1, 2, 13, 6, 48, -4, 40, 20, -54, 17, 45]

//k is the fixed window size
function sw_2_FirstNegativeNumInEachWinSizK(arr, k) {

    let negArray = [];
    let j = 0;

    //We are using 2 pointers i & j
    for (i = 0; j < arr.length; j++) {
        //j calcualtions will be done for each item in an array.
        //we keep storing -ve items within this array to a list.
        if (arr[j] < 0) {
            negArray.push(arr[j]);
        }
        
        //Window size condition is --> (j-i+1) === k, as soon as this is met
        //the results start making meaning to us and we do our calculations.
        if ((j - i + 1) === k) {
            if (negArray.length > 0) {
                console.log('First Negative no. in window no. ' + (i + 1) + ' is: ' + negArray[0]);
            } else {
                console.log('First Negative no. in window no. ' + (i + 1) + ' does not exist.');
            }
            //when the window is about to move ahead, we need to realize that the first item
            //in the negArray is no longer required and we can remove it.
            if(negArray[0] === arr[i]) {
                negArray.shift();
            }
            i++;
        }
    }
}

sw_2_FirstNegativeNumInEachWinSizK(array, 3);
