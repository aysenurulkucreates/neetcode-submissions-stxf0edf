class Solution {
    isValid(s) {
        let stack = [];
        let map = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for(let i = 0; i < s.length; i++){
            let char = s[i];

            if(char in map){
                if(stack.length === 0) return false;
                if(stack.pop() !== map[char]) return false;

            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
