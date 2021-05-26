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
            return;
        }

        //If index is greater than list's current lenght then add item to end.
        if (index >= this.length) {
            this.append(value);
            return;
        }

        let currentIndex = 0;
        let currentNode = this.head;

        //TODO: refactor below code to a separate method.
        while(currentIndex !== index) {
            if (currentIndex === (index-1)) {
                const newNode = new Node(value, currentNode.next);
                currentNode.next = newNode;
                this.length++;
                return;
            }
            currentIndex++;
            currentNode = currentNode.next;
        }
    }
}

const myLinkedList = new LinkedList(5);
myLinkedList.append(7);
myLinkedList.append(3);
myLinkedList.prepend(11);
myLinkedList.prepend(29);
myLinkedList.insert(4,77);
myLinkedList.insert(6,39);
myLinkedList.printMyLinkedList();
//29,11,5,7,3