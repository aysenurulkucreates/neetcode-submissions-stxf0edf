class Solution {
    groupAnagrams(strs) {
        if(strs.length === 0) return [];
        const map = {};

        for(let i = 0; i < strs.length; i++){
           const originalWord = strs[i];
           const sortedWord = originalWord.split('').sort().join('');
           if(!map[sortedWord]) {
            map[sortedWord] = [originalWord];
           } else {
            map[sortedWord].push(originalWord);
           }
           
        }
        return Object.values(map);
    }
}
