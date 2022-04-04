//url - https://leetcode.com/problems/group-anagrams/
//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var groupAnagrams = function(strs) {
    let map = {};
    let arrayResult = [];
    
    for(let i = 0; i< strs.length; i++) {
        let key = strs[i].split('').sort().join('');
        if(map[key] === undefined) {
            map[key] = [strs[i]];
        } else {
            map[key].push(strs[i]);
        }
    }
    
   Object.values(map).forEach((x) => arrayResult.push(x))
    
    return arrayResult;
    
};