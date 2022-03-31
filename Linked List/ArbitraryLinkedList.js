class Node {
  constructor(value, next, arbit) {
    this.next = next;
    this.value = value;
    this.arbit = arbit;
  }
}

class ArbitLinkedList {
  constructor(value) {
    this.head = new Node(value, null, null);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const obj = new Node(value, null, null);
    this.tail.next = obj;
    this.tail = obj;
    this.length++;
  }
  printMyLinkedList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(
        `Node Value : ${currentNode.value}, next : ${currentNode?.next?.value}, arbit : ${currentNode.arbit.value}`
      );
      currentNode = currentNode.next;
    }
  }
  setArbit(value, target) {
    const currNode = this.iterateLinkedList(value);
    const targetNode = this.iterateLinkedList(target);
    currNode.arbit = targetNode;
  }

  iterateLinkedList(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
const myLinkedList = new ArbitLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

myLinkedList.setArbit(1, 3);
myLinkedList.setArbit(2, 1);
myLinkedList.setArbit(3, 5);
myLinkedList.setArbit(4, 3);
myLinkedList.setArbit(5, 2);

myLinkedList.printMyLinkedList();

copyLinkedList(myLinkedList);

function copyLinkedList(myLinkedList) {
  const copyLinkedList = new ArbitLinkedList(myLinkedList.head.value);
  const map = {};
  let currNodeOfCopyList = copyLinkedList.head;
  let currNodeOfMainList = myLinkedList.head;
  while (currNodeOfMainList !== null) {
    if (currNodeOfMainList.next === null) {
      currNodeOfCopyList.next = null;
      copyLinkedList.tail = currNodeOfCopyList;
    } else {
      currNodeOfCopyList.next = new Node(currNodeOfMainList.next.value);
    }
    currNodeOfCopyList.arbit = new Node(currNodeOfMainList.arbit.value);
    // map[currNodeOfCopyList.value] = {
    //   arbit: currNodeOfCopyList.arbit,
    //   next: currNodeOfCopyList.next,
    // };
    currNodeOfCopyList = currNodeOfCopyList.next;
    currNodeOfMainList = currNodeOfMainList.next;
  }

  //   let currNode = copyLinkedList.head;
  //   while (currNode !== null) {
  //     //currNode.next = map[currNode.value].next;
  //     currNode.arbit = map[currNode.value].arbit;
  //     currNode = currNode.next;
  //   }
  copyLinkedList.printMyLinkedList();
}
