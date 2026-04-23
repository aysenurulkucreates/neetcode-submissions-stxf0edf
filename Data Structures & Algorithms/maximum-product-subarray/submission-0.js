class Solution {
    maxProduct(nums) {
        if(nums.length === 0) return 0;

        let globalMax = nums[0];
        let currentMax = nums[0];
        let currentMin = nums[0];
        
        for(let i = 1; i < nums.length; i++) {
            let num = nums[i];

            let tempMax = currentMax;

            currentMax = Math.max(num, num * tempMax, num * currentMin);

            currentMin = Math.min(num, num * tempMax, num * currentMin);

            globalMax = Math.max(globalMax, currentMax);
        }
       return globalMax;
    }
}
