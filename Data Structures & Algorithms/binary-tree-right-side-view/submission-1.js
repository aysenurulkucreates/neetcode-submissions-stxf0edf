
class Solution {
    rightSideView(root) {
        if(!root) return [];
        const res = [];
        const queue = [root];

        while(queue.length > 0) {
            const levelSize = queue.length;

            for(let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift();
                if(i === levelSize - 1) {
                    res.push(currentNode.val);
                }
              if(currentNode.left) queue.push(currentNode.left);
              if(currentNode.right) queue.push(currentNode.right);
            }
        }
        return res;

    }
}
