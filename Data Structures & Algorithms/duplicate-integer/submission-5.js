
class Solution {
    hasDuplicate(nums) {
        const map = {};

        for(let i = 0; i < nums.length; i++){
            const currentNum = nums[i];
            if(map[currentNum] !== undefined){
                return true;
            }
            map[currentNum] = true;
        }
        return false;
    }
}