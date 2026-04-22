class Solution {
    rob(nums) {
        const n = nums.length;

        if(!n) return 0;
        if(n === 1) return nums[0];

        return Math.max(
            this.robHelper(nums, 0, n - 2),
            this.robHelper(nums, 1, n - 1)
        );
    }
    robHelper(nums, start, end) {
        let prev2 = 0;
        let prev1 = 0;

        for(let i = start; i <= end; i++) {
            let current = Math.max(prev2 + nums[i], prev1);

            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
}
