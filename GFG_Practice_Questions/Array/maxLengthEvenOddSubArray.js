//let array = [10, 11, 12, 15]
//let array = [10,11,113,15]
//let array = [10,12,12,14]
//let array = [7,10,13,14]
//let array = [10,12,14,7,8]
let array = [5,10,20,6,3,8]

function maxLengthEvenOddSubArray(array) {
    let maxStreak = 1;
    let tempStreak = 1;
    for (let i = 1; i < array.length; i++) {
        //sum of an even and an odd numnber is always odd.
        if ((array[i - 1] + array[i]) % 2 !== 0) {
            tempStreak++;
        } else {
            tempStreak = 1;
        }

        if (tempStreak > maxStreak) {
            maxStreak = tempStreak;
        }
    }
    console.log('Maximum subArray length of even odd subarray is: ' + maxStreak);
}
maxLengthEvenOddSubArray(array);