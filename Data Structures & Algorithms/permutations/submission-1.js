class Solution {
    permute(nums) {
        const res = [];

        const blackList = new Set();

        const dfs = (subset) => {
            if(subset.length === nums.length) {
                res.push([...subset]);
                return;
            }
            for(let i = 0; i < nums.length; i++) {
                if(blackList.has(nums[i])) {
                    continue;
                }

                subset.push(nums[i]);
                blackList.add(nums[i]);

                dfs(subset);
                subset.pop();

                blackList.delete(nums[i]);
            }
        }
        dfs([]);
        return res;
    }
}
