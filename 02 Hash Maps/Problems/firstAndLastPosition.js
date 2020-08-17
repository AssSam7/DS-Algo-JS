/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      map[nums[i]];
    }
    map[nums[i]] = i;
  }
  console.log(map);
  if (map[target] !== undefined) {
    return [nums.indexOf(target), map[target]];
  }
  return [-1, -1];
};
