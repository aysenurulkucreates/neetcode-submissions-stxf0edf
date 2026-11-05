class Solution {
    groupAnagrams(strs) {
        const map = new Map();

        for(let i = 0; i < strs.length; i++) {
            const orgWord = strs[i];
            const sortedWord = orgWord.split('').sort().join('');

            if(!map.has(sortedWord)) {
                map.set(sortedWord, [orgWord]);
            } else {
                map.get(sortedWord).push(orgWord);
            }
        }
        return Array.from(map.values());
    }
}
