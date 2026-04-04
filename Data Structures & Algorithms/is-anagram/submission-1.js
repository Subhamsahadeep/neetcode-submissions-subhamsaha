class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapKeys = {}
        for(let char of s){
            mapKeys[char] = (mapKeys[char] || 0) + 1
        }
         for(let char of t){
            if(!mapKeys[char]) return false;
            mapKeys[char] = mapKeys[char] - 1;
             if(mapKeys[char] < 0) return false;
        }
        for(let value of Object.values(mapKeys)){
            if(value > 0) return false; 
        }
        return true;
    }
}
