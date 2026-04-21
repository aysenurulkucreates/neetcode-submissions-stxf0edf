class Solution {
    networkDelayTime(times, n, k) {
        const adj = Array.from({ length: n + 1 }, () => []);
        
        for (const [u, v, time] of times) {
            adj[u].push([v, time]); 
        }
        const minHeap = new MinPriorityQueue(x => x[0]);
        
        minHeap.enqueue([0, k]);

        const visited = new Set();
        let maxTime = 0;

        while (!minHeap.isEmpty()) {
            const item = minHeap.dequeue();
            const [time, node] = item.element ? item.element : item;

            if (visited.has(node)) continue;

            visited.add(node);
            maxTime = Math.max(maxTime, time);

            for (const [neighbor, travelTime] of adj[node]) {
                if (!visited.has(neighbor)) {
                    minHeap.enqueue([time + travelTime, neighbor]);
                }
            }
        }

        return visited.size === n ? maxTime : -1;
    }
}