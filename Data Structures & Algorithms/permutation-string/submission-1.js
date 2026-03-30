class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let left = 0;
        let right = 0;

        let map1 = {}; 
        let map2 = {};

        for (let i = 0; i < s1.length; i++) {
            let char = s1[i];
            map1[char] = (map1[char] || 0) + 1;
        }

        while (right < s2.length) {
            let charRight = s2[right];
            map2[charRight] = (map2[charRight] || 0) + 1;

            if (right - left + 1 > s1.length) {
                let charLeft = s2[left];
                map2[charLeft] -= 1;
                left++;
            }

            if (right - left + 1 === s1.length) {
                if (this.isMatch(map1, map2)) {
                    return true;
                }
            }
            right++;
        }

        return false; 
    }
    isMatch(map1, map2) {
        for (let i = 0; i < 26; i++) {
            let char = String.fromCharCode(97 + i);
            let num1 = map1[char] || 0;
            let num2 = map2[char] || 0

            if (num1 !== num2) {
                return false;
            }
        }
        return true; 
    }
}
