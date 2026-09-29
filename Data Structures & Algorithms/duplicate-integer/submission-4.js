class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueSet = new Set(nums);
        return (nums.length - uniqueSet.size > 0);
    }
}
