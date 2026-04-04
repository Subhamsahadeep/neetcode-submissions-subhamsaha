class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};
        for(let index = 0; index < nums.length; index++){
            let no = nums[index];
            let diff = target-no;
            // hash[diff] = index.toString();
            if (hash[no]) {
            return [parseInt(hash[no]), index]
        } else {
            hash[diff] = index.toString();
        }
            
            
        }
    }
}
