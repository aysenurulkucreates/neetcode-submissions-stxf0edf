class Solution {
    countSubstrings(s) {
        if(!s || s.length === 0) return 0;

        let totalCount = 0;

        const countPalindromesAroundCenter = (left, right) => {
            let currentCount = 0;

            while(left >= 0 && right < s.length && s[right] === s[left]) {
                currentCount ++;

                left--;
                right++;
            }
            return currentCount;
        }
        for(let i = 0; i < s.length; i++) {
            totalCount += countPalindromesAroundCenter(i, i);

            totalCount += countPalindromesAroundCenter(i, i + 1);
        }
        return totalCount;
    }
}
