class Solution {
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let maxLen = 0;
        const set = new Set();

        while(right < s.length) {
            while(set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);

            maxLen = Math.max(maxLen, set.size);
            right++;
        }
        return maxLen;
    }
}
