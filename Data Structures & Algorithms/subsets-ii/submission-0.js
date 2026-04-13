class Solution {
    subsetsWithDup(nums) {
        const res = [];
        nums.sort((a, b) => a - b);

        const dfs = (startIndex, subset) => {
            res.push([...subset]);

            for(let i = startIndex; i < nums.length; i++) {
              if(i > startIndex && nums[i] === nums[i - 1]) {
                continue;
              }

              subset.push(nums[i]);
              dfs(i + 1, subset);
              subset.pop();
            }
        }
        dfs(0, []);
        return res;
    }
}
