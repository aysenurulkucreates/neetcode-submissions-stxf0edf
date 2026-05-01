class Solution {
    reverseBits(n) {
        let result = 0;

        for(let i = 0; i < 32; i++) {
            let bit = n & 1;

            result = (result << 1) | bit;

            n = n >>> 1;
        }
        return result >>> 0;
    }
}
