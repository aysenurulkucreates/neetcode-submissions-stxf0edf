class Solution {
    maxProfit(prices) {
        if(prices.length <= 1) return 0;

        let hold = -prices[0];
        let sell = 0;
        let rest = 0;

        for(let i = 1; i < prices.length; i++) {
            let price = prices[i];

            let prevHold = hold;
            let prevSell = sell;
            let prevRest = rest;

            hold = Math.max(prevHold, prevRest - price) ;
            sell = prevHold + price;
            rest = Math.max(prevRest, prevSell);
        }
        return Math.max(sell, rest);
    }
}
