class Solution {
    missingNumber(nums) {
        let n = nums.length;

        let expectedTotal = (n * (n + 1) / 2);
        let realTotal = 0;

        for(let i = 0; i < n; i++) {
           realTotal += nums[i];
        }
        return expectedTotal - realTotal;
    }
}
