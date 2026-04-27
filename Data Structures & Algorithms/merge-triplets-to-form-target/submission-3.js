class Solution {
    mergeTriplets(triplets, target) {
        // 1. ZEMİN ETÜDÜ: Hedefin üç parçasını da bulabildik mi?
        let foundX = false;
        let foundY = false;
        let foundZ = false;

        // 2. ÜRETİM BANDI
        for (let i = 0; i < triplets.length; i++) {
            let t = triplets[i]; 

            // 3. ZEHİRLİ TUĞLA KONTROLÜ
            if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) {
                continue; 
            }

            // 4. GÜVENLİ TUĞLA ANALİZİ
            if (t[0] === target[0]) foundX = true;
            if (t[1] === target[1]) foundY = true;
            if (t[2] === target[2]) foundZ = true;

            // 5. ERKEN ZAFER KONTROLÜ
            if (foundX && foundY && foundZ) {
                return true;
            }
        }

        // 6. TESLİMAT
        return foundX && foundY && foundZ;
    }
}