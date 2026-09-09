class MinStack {
    constructor() {
       this.stack =[];
       return null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop();
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
        let min = Infinity;

        for (let i = 0; i < this.stack.length; i++) {
            min = Math.min(min, this.stack[i]);
        }

        return min;
    }
}
