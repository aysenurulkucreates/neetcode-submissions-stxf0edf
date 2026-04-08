
class Solution {
    isSameTree(p, q) {
        if(!p && !q) return true;
        if(p && q && p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
        } else {
            return false;
        }
        
    }
}
