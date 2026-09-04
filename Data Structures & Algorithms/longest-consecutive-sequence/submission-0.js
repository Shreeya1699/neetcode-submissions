class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
          if (nums.length === 0) {
        return 0;
    }
    let consecutiveSet = new Set(nums);
    let startNums = [];
    for (let item of consecutiveSet) {
        if (!consecutiveSet.has(item - 1)) {
            startNums.push(item);
        }
    }

    let maxCount = 1;
    for (let i = 0; i < startNums.length; i++) {
        let count = 1;
        let j = 1;
        while (consecutiveSet.has(startNums[i] + j)) {
            count++;
            j++;
        }
        if (maxCount <= count) {
            maxCount = count;
        }
    }

    return maxCount;
    }
}
