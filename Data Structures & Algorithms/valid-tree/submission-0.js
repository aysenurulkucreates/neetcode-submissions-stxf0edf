class Solution {
    validTree(n, edges) {
        if(edges.length !== n - 1) return false;

        const adj = Array.from({length: n}, () => []);
        for(const [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }

        const visitSet = new Set();

        const dfs = (node, parent) => {
            if(visitSet.has(node)) return false;

            visitSet.add(node);

            for(const neighbor of adj[node]) {
                if(neighbor === parent) continue;
                if(!dfs(neighbor, node)) return false;
            }
            return true;
        }
        if(!dfs(0, -1)) return false;

        return visitSet.size === n;
        
    }
}
