// Given an integer array nums, find the contiguous subarray (containing at least one number) which 
// has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6


var maxSubArray = function(nums) {
    console.log(nums);
    
    // Qudratic O(n*n)
    let maxSum;
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum = currentSum + nums[j];
            if (maxSum === undefined) {
                maxSum = currentSum;
            }
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
};
maxSum = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(maxSum);