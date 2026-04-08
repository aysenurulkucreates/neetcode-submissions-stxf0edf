class Solution {
    isSameTree(p, q) {
        if(!p && !q) return true;
        if(p && q && p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
        } else {
            return false;
        }
    }
    isSubtree(root, subRoot) {
        if(!root) return false;
         
         if(this.isSameTree(root, subRoot)) {
            return true;
         } else {
            return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
         }
    }
}
