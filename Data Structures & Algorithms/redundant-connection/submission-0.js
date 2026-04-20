class Solution {
    findRedundantConnection(edges) {
        const n = edges.length;

        const parent = Array.from({length: n + 1}, (_, i) => i);
        const rank = new Array(n + 1).fill(1);

        const find = (node) => {
            let p = parent[node];
            while(p !== parent[p]) {
                parent[p] = parent[parent[p]];
                p = parent[p];
            }
            return p;
        }
        const union = (n1, n2) => {
            const p1 = find(n1);
            const p2 = find(n2);

            if(p1 === p2) return false;

            if(rank[p1] > rank[p2]) {
                parent[p2] = p1;
                rank[p1] += rank[p2];
            } else {
                parent[p1] = p2;
                rank[p2] += rank[p1];
            }
            return true;
        }
       for(const [u, v] of edges) {
        if(!union(u, v)) return [u, v];
       }
    }
}
