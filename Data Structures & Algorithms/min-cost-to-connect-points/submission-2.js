class Solution {
    minCostConnectPoints(points) {
        const n = points.length;

        const minHeap = new MinPriorityQueue(x => x[0]);
        minHeap.enqueue([0, 0]);

        const visited = new Set();
        let totalCost = 0;

        while (visited.size < n) {
            const item = minHeap.dequeue();
            const [cost, i] = item.element ? item.element : item;

            if (visited.has(i)) continue;

            visited.add(i);
            totalCost += cost;

            for (let j = 0; j < n; j++) {
                if (!visited.has(j)) {
                    const dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
                    minHeap.enqueue([dist, j]);
                }
            }
        }

        return totalCost;
    }
}
