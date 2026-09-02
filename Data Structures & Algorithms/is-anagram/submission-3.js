class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const alphabetSet = new Set(s);
        if(t.length !== s.length)
            return false ;
        
        const frequency = new Map();

        for (const alphabet of s) {
            frequency.set(alphabet, (frequency.get(alphabet) || 0)+1);
        }

        for (const ch of t) {
            if(!frequency.has(ch)){
                return false;
            }
            frequency.set(ch, frequency.get(ch) - 1);
            if(frequency.get(ch) === 0){
                frequency.delete(ch);
            }
        }

        return frequency.size === 0;
    }
}

// time complexity = O(t.length) ==> O(n)
// space complexity = O(s.length) ==> O(n)