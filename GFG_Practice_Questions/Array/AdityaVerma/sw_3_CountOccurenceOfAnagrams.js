let array = ['a', 'r', 'a', 'c', 'r', 'a', 't', 'd', 'c', 'a', 'a', 'r']

//Problem: Find count of occurence of anagrams of a pattern within an array.
function sw_3_CountOccurenceOfAnagrams(arr, pattern) {

    let agramMap = {};
    let patArray = pattern.split('');
    let j = 0;
    let k = pattern.length;
    let numOfOccurrence = 0;

    //prepare a map of the anagram string.
    for (let i = 0; i < patArray.length; i++) {
        if (agramMap[patArray[i]]) {
            agramMap[patArray[i]]++;
        } else {
            agramMap[patArray[i]] = 1;
        }
    }

    //The count provides us an easy way to not check our map for zeros again and again w.r.t each key.
    let count = Object.keys(agramMap).length;

    //We are using 2 pointers i & j
    for (i = 0; j < arr.length; j++) {
        //Below condition searches if a key is present or not.
        //If the key is present in the map, then the map count needs to be reduced
        //The "count" is also decremented by 1.
        if (agramMap[arr[j]] !== undefined) {
            agramMap[arr[j]]--;
            //as soon as any of the key hits 0, reduce the count by 1
            if (agramMap[arr[j]] === 0) {
                count--;
            }
        }

        //Window size condition is --> (j-i+1) === k, as soon as this is met
        //the results start making meaning to us and we do our calculations.
        if ((j - i + 1) === k) {
            if (count === 0) {
                numOfOccurrence++;
            }
            //when the window is about to move ahead, the count w.r.t the ith object needs to be increased.
            //We do this as the j side of the window can find this element again, giving a chance to reduce it again.
            if (agramMap[arr[i]] === 0) {
                count++;
            }
            agramMap[arr[i]]++;
            i++;
        }
    }
    console.log('Number of occurences is: ' + numOfOccurrence);
}

sw_3_CountOccurenceOfAnagrams(array, "cara");
