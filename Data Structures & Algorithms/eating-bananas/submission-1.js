class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;

        while(left <= right){
            let k = Math.floor((left + right) / 2);
            let hours = 0;

            for( let i =0;i<piles.length;i++){
                hours += Math.ceil(piles[i]/k);
            }

            if (hours <= h) {
                result = k;
                right = k - 1;
            } else {
                 left = k + 1;
            }
        } 
        return result;
    }
}
