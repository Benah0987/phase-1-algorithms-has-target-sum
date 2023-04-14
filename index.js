function hasTargetSum(array, target) {
  // Write your algorithm here
  const chai = require("chai");
global.expect = chai.expect;
const hasTargetSum = require("../index");

describe("hasTargetSum", () => {
  it("returns true when the array is [3, 8, 12, 4, 11, 7] and the target is 10", () => {
    expect(hasTargetSum([3, 8, 12, 4, 11, 7], 10)).to.be.true;
  });
  it("returns true when the array is [22, 19, 4, 6, 30] and the target is 25", () => {
    expect(hasTargetSum([22, 19, 4, 6, 30], 25)).to.be.true;
  });
  it("returns false when the array is [1, 2, 5] and the target is 4", () => {
    expect(hasTargetSum([1, 2, 5], 4)).to.be.false;
  });
  it("returns true when the array is [-7, 10, 4, 8] and the target is 3", () => {
    expect(hasTargetSum([-7, 10, 4, 8], 3)).to.be.true;
  });
  it("returns true when the array is [1, 2, 3, 4] and the target is 5", () => {
    expect(hasTargetSum([1, 2, 3, 4], 5)).to.be.true;
  });
  it("returns true when the array is [2, 2, 3, 3] and the target is 4", () => {
    expect(hasTargetSum([2, 2, 3, 3], 4)).to.be.true;
  });
  it("returns false when the array is [4] and the target is 4", () => {
    expect(hasTargetSum([4], 5)).to.be.false;
  });
});

  
}

/* 
 Write the Big O time complexity of your function here
  The time complexity of hasTargetSum function depends on the algorithm used. 
  If we use a hash table to store the visited numbers, the time complexity would be O(n) 
  because we iterate the array only once and perform constant time operations for each number in the array.
  However, if we use nested loops, the time complexity would be O(n^2) because we would need to iterate the array multiple times 
  for each number in the array. Therefore, the time complexity of hasTargetSum function is O(n) or O(n^2) depending on the algorithm used.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, targetSum):
    let visitedNumbers = {}
    for each number in array:
        complement = targetSum - number
        if complement is in visitedNumbers:
            return true
        else:
            visitedNumbers[number] = true
    return false

*/

/*
  Add written explanation of your solution here
  The function uses a hash table to keep track of visited numbers in the array. 
  For each number in the array, it computes its complement (i.e., the number needed to reach the target sum) and 
  checks if it has already been visited. If the complement is in the hash table, the function returns true. Otherwise,
  s it adds the number to the hash table and continues to the next number. If none of the numbers in the array add up to the target sum, the function returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
