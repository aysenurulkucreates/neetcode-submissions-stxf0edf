class Solution {
    longestPalindrome(s) {
        if(!s || s.length < 2) return s;

        let start = 0;
        let maxLength = 1;

        const expandAroundCenter = (left, right) => {
            while(left >= 0 && right < s.length && s[right] === s[left]) {
                left--;
                right++;
            }
            return right - left - 1;
        }
        for(let i = 0; i < s.length; i++) {
            let len1 = expandAroundCenter(i, i);
            let len2 = expandAroundCenter(i, i + 1);

            let maxLen = Math.max(len1, len2);

            if(maxLen > maxLength) {
                maxLength = maxLen;

                start = i - Math.floor((maxLen - 1) / 2);
            }
        }
        return s.substring(start, start + maxLength);
    }
}
