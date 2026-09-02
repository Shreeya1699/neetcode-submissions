class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let subProduct = 1;
        let product = 1;
        let result =[];
        let zeroCount = 0;
         
        if(!nums){
            return [];
        }
        nums.forEach((num) => {
            if(num === 0){
                zeroCount++;
                subProduct *=1;
                product = 0;
            }
            else {
                subProduct *=num;
                product *=num;
            }
        });

        if(zeroCount === nums.length){
            return new Array(nums.length).fill(0);
        }

        nums.forEach((num) => {
            if(num === 0)
            {
                if(zeroCount === 1){
                    result.push(subProduct);
                }
                else {
                    result.push(product);
                }
            }
            else {
                result.push(product/num);
            }
        });

        return result;


    }
}
