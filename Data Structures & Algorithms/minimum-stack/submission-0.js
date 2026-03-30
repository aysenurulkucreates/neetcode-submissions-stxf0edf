class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = []; 
    }

    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
           const minNum = Math.min(val, this.minStack[this.minStack.length - 1]);
           this.minStack.push(minNum);
        }
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
