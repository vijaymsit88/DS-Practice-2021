class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        const popedValue = this.top;
        return popedValue.value;
    }
    push(value) {
        if (!value) {
            return;
        }
        if (this.length == 0) {
            this.top =  new Node(value);
            this.bottom = this.top
        } else {
            const newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }
    pop(){
        if (!this.top)
        {
            return;
        }
        const poppedValue = this.top;
        this.top = this.top.next;
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
