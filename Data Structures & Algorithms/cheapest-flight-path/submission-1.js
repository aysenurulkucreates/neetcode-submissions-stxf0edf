class Solution {
    findCheapestPrice(n, flights, src, dst, k) {
        const adj = Array.from({length: n}, () => []);
        for(const [from, to, price] of flights) {
            adj[from].push([to, price]);
        }

        const prices = Array(n).fill(Infinity);
        prices[src] = 0;

        let queue = [[src, 0]];
        let stops = 0;

        while(queue.length > 0 && stops <= k) {
            const nextQueue = [];

            for(const [city, cost] of queue) {
                for(const [neighbor, price] of adj[city]) {
                    const newCost = cost + price;
                    if(newCost < prices[neighbor]) {
                      prices[neighbor] = newCost;
                      nextQueue.push([neighbor, newCost]);
                    }
                }
            }
            queue = nextQueue;
            stops++;
        }
        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}