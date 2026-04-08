
class Solution {
    isBalanced(root) {
        const dfs = (node) => {
            if(!node) return 0;

            let leftDep = dfs(node.left);
            let rightDep = dfs(node.right);

            if(leftDep === -1 || rightDep === -1) return -1;

            let difference = Math.abs(leftDep - rightDep);

            if(difference > 1) {
                return -1;
            } 

            return Math.max(leftDep, rightDep) + 1;
        }

        return dfs(root) !== -1;
    }
}
