class Solution {
    minCostClimbingStairs(cost) {
        const n = cost.length;

        let prev2 = 0;
        let prev1 = 0;

        for( let i = 2; i <= n; i++) {
            let current = Math.min(prev1 + cost[i - 1] , prev2 + cost[i -2]);

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
