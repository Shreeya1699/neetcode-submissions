class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    let countMap = new Map();
    for (let i = 0; i < s1.length; i++) {
        countMap.set(s1[i], (countMap.get(s1[i]) || 0) + 1);
    }

    let l = 0;
    let r = 0;
    let remaining = s1.length;

    while (r < s2.length) {
        if (countMap.has(s2[r])) {
            if (countMap.get(s2[r]) > 0) {
                remaining--;
            }

            countMap.set(s2[r], countMap.get(s2[r]) - 1);
        }

        r++;

        if (r - l > s1.length) {
            if (countMap.has(s2[l])) {
                countMap.set(s2[l], countMap.get(s2[l]) + 1);

                if (countMap.get(s2[l]) > 0) {
                    remaining++;
                }
            }

            l++;
        }

        if (remaining === 0) return true;
    }

    return false;
    }
}
