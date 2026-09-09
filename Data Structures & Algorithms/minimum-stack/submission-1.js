class MinStack {
    constructor() {
       this.stack =[];
       this.minStack =[];
       return null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
         if (
            this.minStack.length === 0 ||
            val <= this.minStack.at(-1)
        ) {
            this.minStack.push(val);
        }
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();
        if (val === this.minStack.at(-1)) {
            this.minStack.pop();
        }
        return null;
        
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
         return this.minStack.at(-1);
    }
}
