class Solution {
    combinationSum(nums, target) {
        let res = [];

        function dfs(start, subset, total) {
            if(total === target) {
                res.push([...subset]);
                return res;
            }

            if(total > target) return;

            for(let i = start; i < nums.length; i++) {
                subset.push(nums[i]);

                dfs(i, subset, total + nums[i]);

                subset.pop();
            }
        }
        dfs(0, [], 0);
        return res;
    }
}