class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        if (!this.first) {
            return;
        }
        return this.first.value;
    }
    enqueue(value){
        if(!value){
            return;
        }
        // call append
        if(!this.first){
            this.first = this.last = new Node(value);
        } else {
            this.last.next = new Node(value);
            this.last = this.last.next;
        }
        this.length++;
    }
    dequeue(){
        if (!this.first) {
            return;
        }
        const retVal = this.first;
        if(this.first === this.last){
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return retVal.value;
    }
    printQueue() {
        let holdPointer = this.first;
        while(holdPointer !== null) {
            console.log(holdPointer.value);
            holdPointer = holdPointer.next;
        }
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Samir');
  myQueue.printQueue();
  myQueue.dequeue();
  myQueue.dequeue();
  console.log(myQueue.peek());
  myQueue.printQueue();
  //Joy
  //Matt
  //Pavel
  //Samir