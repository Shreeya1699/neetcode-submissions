class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";

        let countMap = new Map();
        for(let i=0;i<t.length;i++){
            countMap.set(t[i], ( countMap.get(t[i]) || 0) +1);
        }

        let l=0;
        let start=0;
        let remaining = t.length;
        let minLen = Infinity;

        for(let r=0;r<s.length;r++){
            if (countMap.has(s[r])) {
                if (countMap.get(s[r]) > 0) {
                    remaining--;
                }

                countMap.set(s[r], countMap.get(s[r]) - 1);
            }
            while(remaining === 0){
                if(r-l +1 < minLen){
                    minLen = r-l+1;
                    start = l;
                }

                if (countMap.has(s[l])) {
                countMap.set(s[l], countMap.get(s[l]) + 1);

                if (countMap.get(s[l]) > 0) {
                    remaining++;
                }
            }
            l++;

            }
        }
        
        return minLen === Infinity ? "" : s.substring(start, start + minLen);
        
    }
}
