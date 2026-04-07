
class Solution {
    maxDepth(root) {
        if(root === null) return 0;

        let leftDepth = this.maxDepth(root.left);
        let rightDepth = this.maxDepth(root.right);

        return Math.max(leftDepth, rightDepth) + 1;

    }
}
