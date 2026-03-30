class Solution {
    twoSum(nums, target) {
        if(nums.length === 0) return false;
        const map = {};

        for(let i = 0; i < nums.length; i++){
            const complement = target - nums[i];
            if(complement in map) {
              return [map[complement], i];
            }

            map[nums[i]] = i;

        }
    }
}
