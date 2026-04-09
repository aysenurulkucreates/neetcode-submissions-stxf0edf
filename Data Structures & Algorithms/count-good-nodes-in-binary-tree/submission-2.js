class Solution {
    goodNodes(root) {
        return this.dfs(root, root.val);
    }

    dfs(node, maxSoFar) {
        if(!node) return 0;

        let goodCount = 0;

        if(node.val >= maxSoFar) {
            goodCount = goodCount + 1;
        }
        const max = Math.max(maxSoFar, node.val);
        
        goodCount += this.dfs(node.left, max);
        goodCount += this.dfs(node.right, max);

        return goodCount;
    }

}
