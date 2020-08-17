var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (nums.includes(diff) && hashMap[diff] != i) {
      return [i, hashMap[diff]];
    }
  }
};
