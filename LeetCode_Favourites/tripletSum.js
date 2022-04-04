let array = [2, 4, 5, 6, 4, 8, 3, 10, 9];

function tripletSum(array, sum) {
    let l, r;
    let n = array.length;
    //First Sort it.
    array.sort((a, b) => a - b);

    for (let i = 0; i < n-2; i++) {
        //To find the other 2 elements, start from two ends of the array.
        l = i + 1;
        r = n - 1;
        while (l < r) {
            let tempSum = array[i] + array[l] + array[r];
            if (tempSum === sum) {
                console.log(`Triple found is ${array[i]}  ${array[l]}  ${array[r]}`);
                break;
            } else if (tempSum < sum) {
                l++;
            } else {
                r--;
            }
        }

    }
}

tripletSum(array, 19)