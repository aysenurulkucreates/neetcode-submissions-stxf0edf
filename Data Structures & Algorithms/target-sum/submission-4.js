class Solution {
    findTargetSumWays(nums, target) {
        let sum = 0;
        for(let num of nums) {
          sum += num;
        }

        if(sum < Math.abs(target) || (sum + target) % 2 !== 0) return 0;

        let subsetSum = Math.floor((sum + target) / 2);

        let dp = new Array(subsetSum + 1).fill(0);
        dp[0] = 1;

        for(let num of nums) {
            for(let i = subsetSum; i >= num; i--) {
                dp[i] = dp[i] + dp[i - num];
            }
        }
        return dp[subsetSum];
    }
}
