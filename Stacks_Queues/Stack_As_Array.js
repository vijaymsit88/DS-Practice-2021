class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
        this.length = 0;
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
        this.length++;
    }
    pop() {
        if (this.top === -1) {
            return;
        }

        const poppedValue = this.stack.pop();
        this.top--;
        this.length--;
        return poppedValue;
    }

    printStack() {
        while (this.length !== 0) {
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
