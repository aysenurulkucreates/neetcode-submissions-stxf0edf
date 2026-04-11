class Solution {
    leastInterval(tasks, n) {
        const counts = {};
        for (const task of tasks) {
            counts[task] = (counts[task] || 0) + 1;
        }

        const maxHeap = new MaxPriorityQueue();
        
        for (const key in counts) {
            const freq = counts[key];
    
            maxHeap.enqueue(freq, freq); 
        }

        let time = 0; 
        const cooldownQueue = [];

        while (maxHeap.size() > 0 || cooldownQueue.length > 0) {
            time++; 

            if (maxHeap.size() > 0) {
                const item = maxHeap.dequeue();
                let currentFreq = item.element || item; 
                
                currentFreq--;

                if (currentFreq > 0) {
                    cooldownQueue.push({ 
                        remainingFreq: currentFreq, 
                        readyTime: time + n 
                    });
                }
            }
            if (cooldownQueue.length > 0 && cooldownQueue[0].readyTime === time) {
                const taskToReturn = cooldownQueue.shift();
     
                maxHeap.enqueue(taskToReturn.remainingFreq, taskToReturn.remainingFreq);
            }
        }

        return time;
    }
}