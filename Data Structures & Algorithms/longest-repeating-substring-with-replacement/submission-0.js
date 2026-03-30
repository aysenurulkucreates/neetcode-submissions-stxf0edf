class Solution {
    characterReplacement(s, k) {
        let left = 0;
        let right = 0;
        let maxLength = 0;
        let maxFreq = 0;
        let map = {};

        while(right < s.length){
         map[s[right]] = (map[s[right]] || 0) + 1;
         maxFreq = Math.max(maxFreq, map[s[right]]);

         if((right - left + 1) - maxFreq > k){
            map[s[left]] -= 1;
            left++;
         }

         maxLength = Math.max(maxLength, (right - left + 1));

         right++
        }

        return maxLength;
    }
}
