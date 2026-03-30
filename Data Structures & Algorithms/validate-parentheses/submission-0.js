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
                const topElement = stack.length === 0 ? '#' : stack.pop();

                if(topElement !== map[char]){
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
