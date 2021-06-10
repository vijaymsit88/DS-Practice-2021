  class Stack {
    constructor(){
      this.stack = [];
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        const popedValue = this.stack.pop();
        return popedValue.value;
    }
    push(value) {
        if (!value) {
            return;
        }
        this.stack.push(value);
        this.top =  this.stack[this.stack.length-1];
        if (this.length == 0) {
            this.bottom = this.top;
        } 
        this.length++;
    }
    pop() {
        if (!this.top)
        {
            return;
        }
        if (this.top === this.bottom){
            this.bottom = null;
        }
        const poppedValue = this.stack.pop();
        this.top = this.stack[this.stack.length-2];
        this.length--;
        return poppedValue;
    }

    printStack(){
        if (this.length >= 0) {
            while(this.length !== 0){
                console.log(this.pop().value);
            }
        }
    }
    //isEmpty
  }
  
  const myStack = new Stack();

  myStack.push('Udemy');
  myStack.push('Discord');
  myStack.push('Google');
  console.log(myStack.peek());
  myStack.printStack();
