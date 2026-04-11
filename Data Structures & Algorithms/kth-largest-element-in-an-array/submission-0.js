class Solution {
    findKthLargest(nums, k) {
        const minHeap = new MinPriorityQueue();

        for(let num of nums) {
            minHeap.enqueue(num);

            if(minHeap.size() > k) minHeap.dequeue();
        }

        return minHeap.front();
    }
}
