class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
         let n = height.length;
    if (n === 0) {
        return 0;
    }

    let prefixMax = new Array(n).fill(0);
    let suffixMax = new Array(n).fill(0);

    prefixMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], height[i]);
    }

    suffixMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i + 1], height[i]);
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        result += Math.min(prefixMax[i], suffixMax[i]) - height[i];
    }

    return result;
    }
}
