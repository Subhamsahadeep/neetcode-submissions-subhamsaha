class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mapNums = {}
        for(let no of nums){
            mapNums[no] =  (mapNums[no] || 0) + 1;
            if(mapNums[no] > 1) return true
        }
         return false;
    }
   
}
