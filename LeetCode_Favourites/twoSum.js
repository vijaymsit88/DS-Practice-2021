//url https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let map = {};
  let n = nums.length;
  let j = 0;

  for (let i = 0; i < n; i++) {
    let scndNum = target - nums[i];
    if (map[scndNum] !== undefined) {
      return [i, map[scndNum]];
    }
    map[nums[i]] = i;
  }
};
