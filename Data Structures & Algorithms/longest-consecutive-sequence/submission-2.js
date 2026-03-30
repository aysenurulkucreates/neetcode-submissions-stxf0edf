class Solution {
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let maxStreak = 0;

        for(let num of numSet ){
          if(!numSet.has(num - 1)){
            let leaderNum = num;
            let currentStreak = 1;

            while(numSet.has(leaderNum + 1)){
              leaderNum += 1;
              currentStreak += 1;
            }
            maxStreak = Math.max(maxStreak, currentStreak);
          }
        }
        return maxStreak;
    }
}
