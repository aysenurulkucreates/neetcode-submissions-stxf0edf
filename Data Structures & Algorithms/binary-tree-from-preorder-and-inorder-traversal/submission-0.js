
class Solution {
    buildTree(preorder, inorder) {
        const inorMap = new Map();
        for(let i = 0; i < inorder.length; i++){
            inorMap.set(inorder[i], i);
        }
        let preIdx = 0;

        const build = (left, right) => {
            if(left > right) return null;

            let rootVal = preorder[preIdx]; 
            let root = new TreeNode(rootVal);

            preIdx++;

            let mid = inorMap.get(rootVal);
            root.left = build(left, mid - 1);
            root.right = build(mid + 1, right);

            return root;
        }
        return build(0, inorder.length - 1);
    }
}
