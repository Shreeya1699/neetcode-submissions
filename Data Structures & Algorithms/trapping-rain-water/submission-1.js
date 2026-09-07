class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) return 0;
        let left = 0,
            right = height.length - 1,
            maxLeft = height[left],
            maxRight = height[right],
            area = 0;
        while (left < right) {
            if (maxLeft < maxRight) {
                left++;
                maxLeft = Math.max(maxLeft, height[left]);
                area += maxLeft - height[left];
            } else {
                right--;
                maxRight = Math.max(maxRight, height[right]);
                area += maxRight - height[right];
            }
        }
        return area;
    }
}