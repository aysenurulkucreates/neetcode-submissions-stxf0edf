class Solution {
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();

        for(let stone of stones) {
            maxHeap.enqueue(stone);
            }

        while(maxHeap.size() > 1){
            let stone1 = maxHeap.dequeue();
            let stone2 = maxHeap.dequeue();

            if(stone1 !== stone2) maxHeap.enqueue(stone1 - stone2);
        }
        
        return maxHeap.size() === 0 ? 0 : maxHeap.front();
    }
}
