class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};

        for (let str of strs) {
            // there will be 26 letters and we can create a count of letters for each
            // letters in a single string
            let count = Array.from({ length: 26 }, () => []);
            for (let i = 0; i < str.length; i++) {
                // we are counting the letters in a string and if the string has same chars
                // then the pattern of the count will be exactly same.
                count[str.charCodeAt(i) - 97]++;
            }
            if (!obj[count]) obj[count] = []
            obj[count].push(str);
        }
        return Object.values(obj)
    }
}
