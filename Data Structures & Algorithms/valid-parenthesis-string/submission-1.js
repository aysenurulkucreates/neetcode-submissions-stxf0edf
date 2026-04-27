class Solution {
    checkValidString(s) {
        let leftMin = 0;
        let leftMax = 0;

        for(let i = 0; i < s.length; i++) {
            let char = s[i];

            if(char === '(') {
                leftMin++;
                leftMax++;
            } else if(char === ')') {
                leftMin--;
                leftMax--;
            } else if(char === '*') {
                leftMin--;
                leftMax++;
            }

            if(leftMax < 0) return false;
            if(leftMin < 0) leftMin = 0;
        }
        return leftMin === 0;
    }
}
