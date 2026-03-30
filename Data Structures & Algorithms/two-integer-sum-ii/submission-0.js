class Solution {
    twoSum(numbers, target) {
        if(numbers.lenght === 0) return null;

        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
        let sum = numbers[left] + numbers[right];
          if(sum === target) {
            return [left + 1, right + 1]; 
          }
         else if(sum > target){
            right--;
          } else {
            left++
          }
        }
    }
}
