class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */ 
    evalRPN(tokens) {
        const opsMap = new Map([
            ['+', (a,b)=> a+b],
            ['-', (a,b)=> a-b],
            ['*', (a,b)=> a*b],
            ['/',  (a, b) => Math.trunc(a / b)],
        ]);
        let stack = [];
        for (const token of tokens) {
        if (opsMap.has(token)) {
            const b = stack.pop();
            const a = stack.pop();

            stack.push(opsMap.get(token)(a, b));
        } 
        else {
            stack.push(Number(token));
        }
    }

    return stack.pop();

    }
}
