class Solution {
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let maxLength = 0;
        let charSet = new Set();

        while(right < s.length){
            while(charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }

            charSet.add(s[right]);

            maxLength = Math.max(maxLength, charSet.size);
            right++;
        }
        return maxLength;
    }
}
