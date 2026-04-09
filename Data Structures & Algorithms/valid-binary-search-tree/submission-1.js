
class Solution {
    isValidBST(root) {
        return this.dfs(root, -Infinity, Infinity);
    }

    dfs(node, min, max) {
        if(!node) return true;

        if(node.val <= min || node.val >= max) {
            return false;
        }

        const left = this.dfs(node.left, min, node.val);
        const right = this.dfs(node.right, node.val, max);

        return left && right;
    }
}
