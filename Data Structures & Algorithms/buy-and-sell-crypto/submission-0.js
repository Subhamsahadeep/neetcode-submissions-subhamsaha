class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let max = 0;
        while(r < prices.length){
            // if profit ? 
            if(prices[l] < prices[r])
                max = Math.max(max,prices[r] - prices[l]);
            else
            l=r
            r++;
        }
        return max; 
    }
}
