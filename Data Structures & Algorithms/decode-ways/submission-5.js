class Solution {
    numDecodings(s) {
        if(s[0] === '0') return 0;

        let prev2 = 1;
        let prev1 = 1;

        for(let i = 1; i < s.length; i++) {
            let current = 0;

            if(s[i] !== '0') current += prev1;

            let twoDigit = Number(s[i - 1] + s[i]);

            if(twoDigit >= 10 && twoDigit <= 26) current += prev2;

            prev2 = prev1;
            prev1 = current;

        }
        return prev1;
    }
}
