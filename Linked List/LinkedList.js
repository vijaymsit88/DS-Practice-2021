class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value, null);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const obj = new Node(value, null);
        this.tail.next = obj;
        this.tail = obj;
        this.length++;
    }

    prepend(value) {
        const obj = new Node(value, this.head);
        this.head = obj;
        this.length++;
    }

    printMyLinkedList() {
        let currentNode = this.head;
        while(currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            this.length++; 
            return;
        }

        //If index is greater than list's current lenght then add item to end.
        if (index >= this.length) {
            this.append(value);
            this.length++; 
            return;
        }

        const targetNode = this.iterateLinkedList(index);
        const newNode = new Node(value, targetNode.next);
        targetNode.next = newNode;
        this.length++;       
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        //If index is greater than list's current lenght then add item to end.
        if (index >= this.length) {
            const obj = this.iterateLinkedList(this.length-2);
            obj.next = null;
            this.tail = obj;
            this.length--; 
            return;
        }

        const leader = this.iterateLinkedList(index);
        leader.next = leader.next.next;
        this.length--;       
    }

    iterateLinkedList(index) {
        let currentIndex = 0;
        let currentNode = this.head;

        while(currentIndex !== index) {
            if (currentIndex === (index-1)) {
                return currentNode;
            }
            currentIndex++;
            currentNode = currentNode.next;
        }
    }

    reverse() {
        if(!this.head.next) {
            return this.head;
        }
        let prevPointer = this.head;
        this.tail = this.head;
        let nextPointer = this.head.next;
        this.head = nextPointer;
        this.tail.next = null;
        while(nextPointer.next !== null)
        {
            nextPointer = nextPointer.next;
            this.head.next = prevPointer;
            prevPointer = this.head;
            this.head = nextPointer;
        }
        this.head.next = prevPointer;
    }
}

const myLinkedList = new LinkedList(5);
myLinkedList.append(7);
myLinkedList.append(3);
myLinkedList.prepend(11);
myLinkedList.prepend(29);
// myLinkedList.insert(4,77);
// myLinkedList.insert(6,39);
// myLinkedList.remove(9);
// myLinkedList.remove(2);
// myLinkedList.printMyLinkedList();
myLinkedList.reverse();
myLinkedList.printMyLinkedList();
//29,11,5,7,3