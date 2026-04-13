class Solution {
    combinationSum(nums, target) {
        let res = [];
         
         function dfs(i, subset, total) {
            if(total === target) {
                res.push([...subset]);
                return;
            }
            if(total > target) return;
            if(i >= nums.length) return;

            subset.push(nums[i]);
            dfs(i, subset, total+nums[i]);

            subset.pop();
            dfs(i+1, subset, total);
         }
         dfs(0, [], 0);
         return res;
    }
}