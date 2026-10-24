class Solution {
    kClosest(points, k) {
        const maxHeap = new MaxPriorityQueue((p) => p[0] * p[0] + p[1] * p[1]);

        for(const p of points) {
            maxHeap.enqueue(p);

            if(maxHeap.size() > k) maxHeap.dequeue();
        }
        return maxHeap.toArray();
    }
}