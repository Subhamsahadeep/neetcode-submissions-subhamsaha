class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max = 0
        console.log(set)
        for(let num of set){
            if(set.has(num-1)) continue;

            let currentNum = num;
            let currentMax = 0;
            while(set.has(currentNum)){
                currentMax++;
                currentNum++;
            }
            max = Math.max(currentMax,max)
        }
        return max
    }
}
