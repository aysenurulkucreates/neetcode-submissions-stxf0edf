class Solution {
    canPartition(nums) {
        let sum = nums.reduce((a, b) => a + b, 0);

        if(sum % 2 !== 0) return false;

        let target = sum / 2;

        let dp = new Set();
        dp.add(0);

        for(let num of nums) {
            let nextDp = new Set(dp);

            for(let currentSum of dp) {
                let newSum = currentSum + num;

                if(newSum === target) return true;
                if(newSum < target) nextDp.add(newSum);
            }
            dp = nextDp;
        }
        return false;
    }
}
