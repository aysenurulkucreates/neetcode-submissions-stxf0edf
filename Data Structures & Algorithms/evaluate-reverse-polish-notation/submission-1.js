class Solution {
    evalRPN(tokens) {
        let stack = [];

        for(let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            
            if(['+', '-', '*', '/'].includes(token)){
                
                let rightNum = stack.pop(); 
                let leftNum = stack.pop(); 
              
                if (token === '+') {
                    stack.push(leftNum + rightNum);
                } 
                else if (token === '-') {
                    stack.push(leftNum - rightNum);
                } 
                else if (token === '*') {
                    stack.push(leftNum * rightNum);
                } 
                else if (token === '/') {
                    stack.push(Math.trunc(leftNum / rightNum)); 
                }

            } 
           
            else {
                stack.push(Number(token));
            }
        }
        
        // Döngü bitti, kutuda kalan tek ve son sayıyı ver!
        return stack.pop(); // (veya stack[0] da diyebilirsin, aynı şey)
    }
}