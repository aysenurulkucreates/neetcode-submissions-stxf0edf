class Solution {
    myPow(x, n) {
        if(n === 0) return 1;
        if(x === 0) return 0;

        let power = Math.abs(n);
        let result = 1;

        while(power > 0) {
            if(power % 2 !== 0) result *= x;

            x *= x ;
            power = Math.floor(power / 2);
        }
        return n < 0 ? 1 / result: result;
    }
}
