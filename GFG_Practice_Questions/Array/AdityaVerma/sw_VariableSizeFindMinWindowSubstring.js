let array = "adobecodebanc".split('');

function sw_VariableSizeFindMinWindowSubstring(array, pattern) {
    let agramMap = {};
    let patArray = pattern.split('');
    let j = i = 0;
    let minWinLength = array.length;
    let count = 0;
    let left;
    let right;

    //prepare a map of the anagram string.
    for (let i = 0; i < patArray.length; i++) {
        if (agramMap[patArray[i]]) {
            agramMap[patArray[i]]++;
        } else {
            agramMap[patArray[i]] = 1;
        }
    }

    count = Object.keys(agramMap).length;

    while (j < array.length) {

        //Calculations, creating a map of characters.
        if (agramMap[array[j]] !== undefined) {
            agramMap[array[j]]--;
            if (agramMap[array[j]] === 0) {
                count--;
            }
        }
        j++;
        if(count > 0) continue;

        //Window hitting condition and taking max window size.
        if (count === 0) {
            while (count === 0) {
                if (agramMap[array[i]] !== undefined) {
                    agramMap[array[i]]++;
                    if (agramMap[array[i]] > 0) {
                        count++;
                    }
                }
                i++;
            }
        }
        minWinLength = Math.min(minWinLength, j - i + 1);
        // if ((j-i) < minWinLength) {
        //     left = i;
        //     right = j;
        //     minWinLength = j - i + 1;
        // }
    }

    console.log('Longest substring size with k unique characters is: ' + minWinLength);
}

sw_VariableSizeFindMinWindowSubstring(array, "abc")