class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0
        let end = numbers.length - 1;
        let result = null;
        while(start < end){
            const sum = numbers[start] + numbers[end];
            // console.log("sum",sum)
            if(sum < target) start++;
            else if(sum > target) end--;
            else if(sum == target) {
                result = [start+1,end+1]; 
                break;
            }
        }
        return result;
    }
}
