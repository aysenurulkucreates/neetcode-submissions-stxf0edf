class Solution {
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let maxProfit = 0;

        while(right < prices.length){
          
          if(prices[left] < prices[right]){
           let currentProfit = prices[right] - prices[left];
           maxProfit = Math.max(maxProfit, currentProfit);
          } else {
             left = right;
          }
          right++;
        }
      return maxProfit;
    }
}
