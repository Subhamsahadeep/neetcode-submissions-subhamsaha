class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let hash = {};

        // build frequency map
        for (let ch of s1) {
            hash[ch] = (hash[ch] || 0) + 1;
        }

        let start = 0;
        let count = s1.length;
        for(let end=0; end < s2.length; end++){
          let char = s2[end];

            // if char is useful
            if (hash[char] !== undefined) {
                if (hash[char] > 0) count--;
                hash[char]--;
            }

            // if window size > s1 → shrink
            if (end - start + 1 > s1.length) {
                let leftChar = s2[start];

                if (hash[leftChar] !== undefined) {
                    if (hash[leftChar] >= 0) count++;
                    hash[leftChar]++;
                }
                start++;
            }

            // found valid permutation
            if (count === 0) return true;
        }

        return false;
    }

}
