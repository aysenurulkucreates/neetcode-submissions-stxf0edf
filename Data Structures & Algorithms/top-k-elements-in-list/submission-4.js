class Solution {
    topKFrequent(nums, k) {
        if(nums.length === 0 || k > nums.length) return [];

        const freqMap = new Map();
        for(const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const buckets = Array.from({length: nums.length + 1}, () => []);
        for(const [num, freq] of freqMap) {
            buckets[freq].push(num);
        }

        const result = [];
        for(let i = buckets.length - 1; i >= 0; i--) {
            if(buckets[i].length > 0) {
                result.push(...buckets[i]);

                if(result.length === k) {
                    return result;
                }
            }
        }
        return result;
    }
}
