class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxVol = 0;

    while (left < right) {
        const minHeight = Math.min(heights[left], heights[right]);
        const vol = (right - left) * minHeight;

        maxVol = Math.max(maxVol, vol);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxVol;
};
    }
