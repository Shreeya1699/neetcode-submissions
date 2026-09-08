class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
    let result = 0;

    for (let i = 1; i < prices.length; i++) {
        if(result < prices[i] - minPrice) result = prices[i] - minPrice;
        if(minPrice > prices[i]) minPrice = prices[i];
    }

    return result;
    }
}
