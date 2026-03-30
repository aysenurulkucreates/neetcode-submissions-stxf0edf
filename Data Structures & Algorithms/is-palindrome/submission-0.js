class Solution {
    isPalindrome(s) {
        const isValid = (char) => /[a-zA-Z0-9]/.test(char);
        let left = 0;
        let right = s.length - 1 ;

        while(left < right){
            if(!isValid(s[left])) {
                left++;
                continue;
            }
            if(!isValid(s[right])){
                right--;
                continue;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }
       return true;
    }
}
