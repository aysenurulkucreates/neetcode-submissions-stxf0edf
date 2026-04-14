class Solution {
    letterCombinations(digits) {
        if(!digits || digits.length === 0) return [];

        const res = [];
        const map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        const dfs = (index, subset) => {
            if(index === digits.length){
                res.push(subset.join(''));
                return;
            }
            const letters = map[digits[index]];

            for(const char of letters) {
                subset.push(char);
                dfs(index + 1, subset);
                subset.pop();
            }

        }
        dfs(0,[]);
        return res;
    }
}
