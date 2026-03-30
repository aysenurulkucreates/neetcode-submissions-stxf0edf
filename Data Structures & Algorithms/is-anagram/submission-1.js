class Solution {
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const map = {};
        for(let i = 0; i < s.length; i++){
            const char = s[i];
            map[char] = (map[char] || 0) + 1;
        } 
        for(let i = 0; i < t.length; i++){
            const char = t[i];
            if(!map[char]) return false;
            map[char]--;
        }
        return true;
    }
}
