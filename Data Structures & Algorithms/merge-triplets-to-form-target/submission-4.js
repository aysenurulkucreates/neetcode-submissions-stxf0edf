class Solution {
    mergeTriplets(triplets, target) {
        let foundX = false;
        let foundY = false;
        let foundZ = false;

        for (let i = 0; i < triplets.length; i++) {
            let t = triplets[i]; 

            if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
                continue; 
            }

            if (t[0] === target[0]) foundX = true;
            if (t[1] === target[1]) foundY = true;
            if (t[2] === target[2]) foundZ = true;

            if (foundX && foundY && foundZ) {
                return true;
            }
        }
        return foundX && foundY && foundZ;
    }
}