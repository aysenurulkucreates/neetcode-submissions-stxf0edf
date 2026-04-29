
class Solution {
    isHappy(n) {
        let seenNumbers = new Set();

        while (n !== 1 && !seenNumbers.has(n)) {
            seenNumbers.add(n);
    
            n = this.getSum(n);
        }

        return n === 1;
    }

    getSum(num) {
        let sum = 0;
        while (num > 0) {
            let lastNum = num % 10; 
            sum += lastNum * lastNum; 
            num = Math.floor(num / 10);  
        }
        return sum;
    }
}