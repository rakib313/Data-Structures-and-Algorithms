//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]

// [3,2,4]
// 6
// [3,3]
// 6
var twoSum = function(nums, target) {
    if (nums.length === 0) {
        return "Bad input";
    }

    //Naive approach - O(n*n)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i]+nums[j] === target) {
                return [i,j];
            }
        }
    }

    // let low = 0;
    // let high = nums.length - 1;
    // while(low < high) {
    //     let sum = nums[low] + nums[high];
    //     if (sum === target) {
    //         return [low, high];
    //     }
    //     if (sum < target) {
            
    //     }
    // }
};
console.log(twoSum([3,2,4], 6));

