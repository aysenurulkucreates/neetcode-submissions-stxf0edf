
class Solution {
    kthSmallest(root, k) {
        this.count = 0;
        this.result = null;

        this.inorder(root, k);

        return this.result;
    }

    inorder(node, k) {
      if(!node) return;

      this.inorder(node.left, k);

      this.count += 1;

      if(this.count === k) return this.result = node.val;

      if(this.result !== null) return;

      this.inorder(node.right, k);
    }
}
