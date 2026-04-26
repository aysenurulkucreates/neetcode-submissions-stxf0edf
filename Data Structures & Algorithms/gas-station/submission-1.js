class Solution {
    canCompleteCircuit(gas, cost) {
        let totalTank = 0;
        let currentTank = 0;
        let startingStation = 0;

        for(let i = 0; i < gas.length; i++) {
            let netGas = gas[i] - cost[i];

            totalTank += netGas;
            currentTank += netGas;

            if(currentTank < 0) {
                startingStation = i + 1;
                currentTank = 0;
            }
        }
        return totalTank >= 0 ? startingStation : -1;
    }
}
