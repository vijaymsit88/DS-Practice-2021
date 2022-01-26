let array = ['a', 'b', 'a', 'b', 'c', 'd', 'e', 'r', 'w', 'b', 'y']

function sw_VariableSizeFindLongestSubstringWithNoRepeatChar(array) {
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
        //Only the condition sign changes from previous question.
        if (count === j - i + 1) {
            maxLen = Math.max(maxLen, j - i + 1);
        } else if (count < j - i + 1) {
            while (count < j - i + 1) {
                tempMap[array[i]]--;
                if (tempMap[array[i]] === 0) {
                    delete tempMap[array[i]];
                    count--; 
                }
                i++;
            }
            if(count === j - i + 1) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
        j++;
    }

    console.log('Longest substring size with k unique characters is: ' + maxLen);
}

sw_VariableSizeFindLongestSubstringWithNoRepeatChar(array)