class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let hash = {};
    for (let no of nums) {
        hash[no] = (hash[no] || 0) + 1;
    }

    let count = Array.from({ length: nums.length + 1 }, () => []);

    for (let key of Object.keys(hash)) {
        let freq = hash[key];
        count[freq].push(parseInt(key));
    }

    let arr = [];

    for (let i = count.length - 1; i >= 0; i--) {
        for (let num of count[i]) {
            arr.push(num);
            k--;
            if (k === 0) return arr;
        }
    }

    return arr;
    }
}
