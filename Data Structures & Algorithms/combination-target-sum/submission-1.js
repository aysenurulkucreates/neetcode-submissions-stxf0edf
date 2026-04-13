class Solution {
    combinationSum(nums, target) {
        const res = [];
        const subset = [];
        this.dfs(nums, target, 0, subset, res);
        return res;
    }

    dfs(nums, target, i, subset, res) {
        if (target === 0) {
            res.push([...subset]);
            return;
        }
        
        if (target < 0 || i >= nums.length) return;

        subset.push(nums[i]);
        this.dfs(nums, target - nums[i], i, subset, res);

        subset.pop();
        this.dfs(nums, target, i + 1, subset, res);
    }
}