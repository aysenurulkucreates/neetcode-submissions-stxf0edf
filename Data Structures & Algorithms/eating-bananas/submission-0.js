class Solution {
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);

        while(left <= right){
            let mid = Math.floor((left + right) / 2);

            let totalHour = 0;

            for(let i = 0; i < piles.length; i++){
               totalHour += Math.ceil(piles[i] / mid);
            }

            if(totalHour <= h){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
