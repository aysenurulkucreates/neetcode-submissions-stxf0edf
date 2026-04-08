
class Solution {
    lowestCommonAncestor(root, p, q) {
        if(root.val > p.val && root.val > q.val) {return this.lowestCommonAncestor(root.left, p, q);}
        if(root.val < p.val && root.val < q.val) {return this.lowestCommonAncestor(root.right, p, q);}

        return root;
        
}
}