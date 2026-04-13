class Solution {
    combinationSum2(candidates, target) {
        const res = [];
    
        candidates.sort((a, b) => a - b);

        function dfs(startIndex, subset, total) {
            if (total === target) {
                res.push([...subset]);
                return;
            }

            if (total > target) return;

            for (let i = startIndex; i < candidates.length; i++) {
                
                if (i > startIndex && candidates[i] === candidates[i - 1]) {
                    continue; 
                }

                subset.push(candidates[i]);
               
                dfs(i + 1, subset, total + candidates[i]);
         
                subset.pop();
            }
        }
        dfs(0, [], 0);
        return res;
    }
}