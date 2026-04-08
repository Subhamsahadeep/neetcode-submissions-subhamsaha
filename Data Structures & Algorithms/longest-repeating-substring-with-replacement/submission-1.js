class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // AABAABAA
        //   BAABA - window size = 5
        //   HASHMAP {B-2, A-3} = 5-3 <= k  
        let l = 0;
        let maxCount = 0;
        let maxLength = 0;
        let hash = new Map();

        for (let r = 0; r < s.length; r++) {
            // update count
            hash.set(s[r], (hash.get(s[r]) || 0) + 1);

            // track max repeating char count
            maxCount = Math.max(maxCount, hash.get(s[r]));

            let windowSize = r - l + 1;
            
            if (windowSize - maxCount > k) {
                hash.set(s[l], hash.get(s[l]) - 1);
                l++;
            }
            
            maxLength = Math.max(maxLength, r - l + 1);
        }

         return maxLength;
    }
}
