class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right =nums.length -1;
        let result = Infinity;

        while(left<=right){
            const mid = Math.floor((right+left)/2);
            result = Math.min(result, nums[mid]);
            if(nums[mid]< nums[right]){
                right = mid -1;
            }else{
                left = mid+1;
            }
        }
        return result;

    }
}
