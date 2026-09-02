class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        for (const num of nums){
            freqMap.set(num, (freqMap.get(num)?? 0 ) +1);
        }
        const sortedMap = new Map([...freqMap.entries()].sort((a,b) => b[1] - a[1]));
        const res = [];
        let i = 0;
        for (const [key] of sortedMap) {   
            if (i++ >= k) break;
            res.push(key);
        }
        return res;
    }
}
