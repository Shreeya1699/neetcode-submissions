class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for(const i in nums){
        //     for( const j in nums){
        //         if(i!==j && nums[i] + nums[j] === target){
        //             return [Number(i), Number(j)];
        //         }
        //     }
        // }
        // return -1;

        const complementaryMap = new Map();
        for( let i = 0; i<nums.length; i++){
            const diff = target - nums[i];
            if(complementaryMap.has(diff)){
                return [complementaryMap.get(diff), i];
            }
            complementaryMap.set(nums[i], i);
        }
        return [];
    }
}
