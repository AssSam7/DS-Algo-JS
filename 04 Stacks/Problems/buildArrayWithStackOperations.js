/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let operations = [],
    flag = true,
    outbound = 0;
  // Check if sequence is there
  for (let i = 1; i <= target.length; i++) {
    if (target[i - 1] != i) {
      flag = false;
    }
  }
  // Assigning the outbound value (maximum number till which the scanning should continue)
  flag ? (outbound = target.length) : (outbound = Math.max(...target));
  for (let i = 1; i <= outbound; i++) {
    if (target.includes(i)) {
      operations.push("Push");
    } else {
      operations.push("Push");
      operations.push("Pop");
    }
  }
  return operations;
};
