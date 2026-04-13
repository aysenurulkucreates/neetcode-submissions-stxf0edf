class Solution {
    subsets(nums) {
        const result = [];

        const backtrack = (startIndex, currentSubset) => {
            result.push([...currentSubset]); 

            for (let i = startIndex; i < nums.length; i++) {
                currentSubset.push(nums[i]);  
                backtrack(i + 1, currentSubset); 
                currentSubset.pop();             
            }
        };

        backtrack(0, []);
        return result;
    }
}