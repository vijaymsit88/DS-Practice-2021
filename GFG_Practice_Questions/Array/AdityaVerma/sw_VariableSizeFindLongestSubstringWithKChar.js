let array = ['a', 'b', 'a', 'b', 'c', 'b', 'e', 'b', 'e', 'b', 'e']

function sw_VariableSizeFindLongestSubstringWithKChar(array, k) {
    let maxLen = 0;
    let i = j = 0;
    let tempMap = {};
    let count = 0;

    while (j < array.length) {
        //Calculations, creating a map of characters.
        if (tempMap[array[j]]) {
            tempMap[array[j]]++;
        } else {
            tempMap[array[j]] = 1;
        }

        //count of unique characters
        count = Object.keys(tempMap).length;

        //Window hitting condition and taking max window size.
        //In else part take care of condition when we ahead of the condition.
        if (count === k) {
            maxLen = Math.max(maxLen, j - i + 1);
        } else if (count > k) {
            while (count > k) {
                tempMap[array[i]]--;
                if (tempMap[array[i]] === 0) {
                    delete tempMap[array[i]];
                    count--; 
                }
                i++;
            }
            if(count === k) {
                maxLen = Math.max(maxLen, j - 1 + 1);
            }
        }
        j++;
    }

    console.log('Longest substring size with k unique characters is: ' + maxLen);
}

sw_VariableSizeFindLongestSubstringWithKChar(array, 3)