
class Solution {
    diameterOfBinaryTree(root) {
        if(!root) return 0;
        
        let maxDiameter = 0;

        function dfs(node) {
          if(!node) return 0;

          let leftDepth = dfs(node.left);
          let rightDepth = dfs(node.right);

          maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

          return Math.max(leftDepth, rightDepth ) + 1;
        }
        dfs(root);

        return maxDiameter;
    } 
    
}
