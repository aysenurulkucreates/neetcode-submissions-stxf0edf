
class Solution {
    cloneGraph(node) {
        if (!node) {
            return null;
        }

        const visited = new Map();

        const dfs = (oldNode) => {
            if (visited.has(oldNode)) return visited.get(oldNode);
            
            const copyNode = new Node(oldNode.val);

            visited.set(oldNode, copyNode);

            for (let neighbor of oldNode.neighbors) {
                copyNode.neighbors.push(dfs(neighbor));
            }

            return copyNode;
        }
        return dfs(node);
    }
}
