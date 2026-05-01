class Solution {
    reverse(x) {
        const MIN = -2147483648;
        const MAX = 2147483647;

        let rev = 0;

        while(x !== 0) {
            let pop = x % 10;

            x = Math.trunc(x / 10);

            if(rev > Math.trunc(MAX / 10) || (rev === Math.trunc(MAX / 10) && pop > 7)) return 0;
            if(rev < Math.trunc(MIN / 10) || (rev === Math.trunc(MIN / 10) && pop < -8)) return 0;

            rev = (rev * 10) + pop;
        }
        return rev;
    }
}
