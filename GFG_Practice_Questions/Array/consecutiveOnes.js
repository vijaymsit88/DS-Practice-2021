let array = [1,0,1,1,1,1,0,1,1]
//Problem: To find out maximum streak of consecutive ones.

function consecutiveOnes(array) {
    let count = 0;
    let maxStreak = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            count++;
            if (count > maxStreak) {
                maxStreak = count;
            }
        } else {
            count = 0;
        }
    }
    console.log("Max streak of 1 is: " + maxStreak);
}

consecutiveOnes(array);