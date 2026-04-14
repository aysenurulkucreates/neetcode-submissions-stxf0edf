class Solution {
    generateParenthesis(n) {
        const res = [];

        const dfs = (openCount, closeCount, subset) => {
            if(openCount === n && closeCount === n) {
                res.push(subset.join(''));
                return;
            }

            if(openCount < n) {
              subset.push('(');
              dfs(openCount + 1, closeCount, subset);
              subset.pop();
            }

            if(closeCount < openCount) {
              subset.push(')');
              dfs(openCount, closeCount + 1, subset);
              subset.pop();
            }
        }
        dfs(0, 0, []);
        return res;
    }
}
