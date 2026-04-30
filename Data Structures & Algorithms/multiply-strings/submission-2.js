class Solution {
    multiply(num1, num2) {
        if(num1 === '0' || num2 === '0') return 0;

        let m = num1.length;
        let n = num2.length;

        let resultArr = new Array(m + n).fill(0);

        for(let i = n - 1; i >= 0; i--) {
            for(let j = m - 1; j >= 0; j--) {
                let multiplication = Number(num1[j]) * Number(num2[i]);

                let p1 = i + j;
                let p2 = i + j + 1;

                let total = multiplication + resultArr[p2];

                resultArr[p2] = total % 10;
                resultArr[p1] += Math.floor(total / 10);
            }
        }
        let begin = 0;
        while(begin < resultArr.length && resultArr[begin] === 0) {
            begin++;
        }

        return resultArr.slice(begin).join('');
    }
}
