class Solution {
    countComponents(n, edges) {
        const adj = Array.from({length: n}, () => []);
        for(const [n1, n2] of edges) {
            adj[n1].push(n2);
            adj[n2].push(n1);
        }
        const visitedSet = new Set();
        let count = 0;

        const dfs = (node) => {
            visitedSet.add(node);
            for(const neighbor of adj[node]) {
                if(!visitedSet.has(neighbor)) dfs(neighbor);
            }

        }
        for(let i = 0; i < n; i++) {
            if(!visitedSet.has(i)){
                count += 1;
                dfs(i);
            }
        }
        return count;
    }
}
