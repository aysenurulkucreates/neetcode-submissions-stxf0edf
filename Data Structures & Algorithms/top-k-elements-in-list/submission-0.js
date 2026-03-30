class Solution {
    topKFrequent(nums, k) {
        if(nums.length === 0) return [];
        const map = {};

        for(let i = 0; i < nums.length; i++){
            const char = nums[i];
            map[char] = (map[char] || 0) + 1;
        }

       return Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k).map(Number);
    }
}
