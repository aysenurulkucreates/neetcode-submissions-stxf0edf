class KthLargest {
    constructor(k, nums) {
        this.k = k;
     
        this.minHeap = new MinPriorityQueue();

        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.minHeap.enqueue(val);
        
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
       
        return this.minHeap.front();
    }
}