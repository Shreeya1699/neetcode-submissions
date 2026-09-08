class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let deque = new Set();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (deque.has(s[i])) {
            result = Math.max(result, deque.size);
            while (deque.size > 0) {
                const first = deque.values().next().value;  
                deque.delete(first);
                if (first === s[i]) break;
            }
        }
        deque.add(s[i]);
    }
    return Math.max(result, deque.size);;
    }
}
