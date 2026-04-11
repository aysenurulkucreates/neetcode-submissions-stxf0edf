class Solution {
    kClosest(points, k) {
        const pq = new MaxPriorityQueue((p) => p[0] * p[0] + p[1] * p[1]);

        for (const p of points) {
            pq.enqueue(p);

            if (pq.size() > k) {
                pq.dequeue();
            }
        }

        const result = [];

        while (pq.size() > 0) {
            const item = pq.dequeue();
            result.push(item.element || item);
        }

        return result;
    }
}