class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }
    peek() {
        return this.stack[this.top];
    }
    push(value) {
        if (!value) {
            return;
        }
        this.stack.push(value);
        this.top++;
    }
    pop() {
        if (this.top === -1) {
            return;
        }

        const poppedValue = this.stack.pop();
        this.top--;
        return poppedValue;
    }

    printStack() {
        while (this.stack.length !== 0) {
            console.log(this.pop());
        }
    }
}

const myStack = new Stack();

myStack.push('Udemy');
myStack.push('Discord');
myStack.push('Google');
console.log(myStack.peek());
myStack.printStack();
