/* Given an integer array nums, move all 0's to the end of it while maintaining
the relative order of the non-zero elements.
Note: that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
Input: nums = [0]
Output: [0] */

// Shift array items one place to the left
function shiftArrayItems(nums, index) {
    for (let i = index; i < nums.length-1; i++) {
        nums[i] = nums[i+1];
    }
    return nums;
}
function placeZeroAtLastIndex(nums) {
    nums[nums.length-1] = 0;
    return nums;
}

var moveZeroes = function(nums) {
    let index = nums.length - 1;
    if (nums === undefined || nums.length === 0) {
        console.log("Bad Input.");
    }
    if (nums.length === 1) {
        return nums;
    }
    while (index >= 0) {
        if (nums[index] === 0) {
            nums = shiftArrayItems(nums, index);
            nums = placeZeroAtLastIndex(nums);
            index--;
        }
        else {
            index--;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12])); // Qudratic O(n*n)