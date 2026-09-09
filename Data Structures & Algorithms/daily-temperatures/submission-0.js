class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        let result = new Array(n).fill(0);
        let stack = [];

        for(let i=0;i<n;i++){
            // if(stack.length === 0){
            //     stack.push(i);
            // }
            while(temperatures[i]> temperatures[stack[stack.length-1]]){
                result[stack[stack.length -1]] = i - stack[stack.length -1];
                stack.pop();
            }
            stack.push(i);
        }
        return result;

    }
}
