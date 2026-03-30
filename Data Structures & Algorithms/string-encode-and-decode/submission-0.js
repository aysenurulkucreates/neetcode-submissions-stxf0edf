class Solution {
    
    encode(strs) {
        let res = '';
        for(let i = 0; i < strs.length; i++){
            const word = strs[i];
            res += word.length + '#' + word ;
        }
        return res;
        
    }

    decode(str) {
        const res = [];
        let i = 0;

        while(i < str.length) {
            let j = str.indexOf('#', i);
            let length = Number(str.slice(i, j));
            let originalWord = str.slice(j + 1, j + 1 + length )

            res.push(originalWord);

            i = j + 1 + length;
        }
        
        return res;
        
    }
}
