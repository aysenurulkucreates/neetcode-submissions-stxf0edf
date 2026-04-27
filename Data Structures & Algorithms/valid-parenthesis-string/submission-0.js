class Solution {
    checkValidString(s) {
        let leftMin = 0;
        let leftMax = 0;

        for(let i = 0; i < s.length; i++) {
            let char = s[i];

            if(char === '(') {
                leftMin += 1;
                leftMax += 1;
            } else if(char === ')') {
                leftMin -= 1;
                leftMax -= 1;
            } else if(char === '*') {
                leftMin -= 1;
                leftMax += 1;
            }

            if(leftMax < 0) return false;
            if(leftMin < 0) leftMin = 0;
        }
        return leftMin === 0;
    }
}
