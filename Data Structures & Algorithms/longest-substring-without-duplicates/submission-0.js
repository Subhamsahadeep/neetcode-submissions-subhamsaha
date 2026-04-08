class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = l;
        let hash = new Map();
        let maxSize = 0
        while (l <= r && r < s.length) {
            if (!hash.get(s[r])) {
                hash.set(s[r], true);
                maxSize = Math.max(maxSize,hash.size)
                r++;
            } else {
                hash.delete(s[l]);
                l++;
            }
        }
        return maxSize;
        }
}
