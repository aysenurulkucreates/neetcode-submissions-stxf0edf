class Solution {
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
       
        let stack = [];

        for(let i = 0; i < temperatures.length; i++) {
            let todayTemp = temperatures[i]; 

            while(stack.length > 0 && todayTemp > temperatures[stack[stack.length - 1]]) {
                
                let coldIndex = stack.pop();
                
                let waitedDays = i - coldIndex;
                
                result[coldIndex] = waitedDays;
            }

            stack.push(i);
        }
        
        return result;
    }
}