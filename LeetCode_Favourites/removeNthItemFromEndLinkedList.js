//URL -> https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//Given the head of a linked list, remove the nth node from the end of the list and return its head.

//BruteForce O(2N)
var removeNthFromEnd = function(head, n) {
    let lengthOfList = findLength(head);
    let itemFromFirst = lengthOfList - n;
    let prevNode = head;
    let count = 0;
    if(itemFromFirst === 0) {
        head = prevNode.next;
        return head;
    }

    while(count < itemFromFirst-1) {
        prevNode = prevNode.next;
        count++;
    }

    prevNode.next = prevNode.next.next;
    return head;
};

function findLength(head) {
    let currNode = head;
    let count = 0;
    if(currNode.Next === null) {
        return 1;
    }
    while(currNode !== null) {
        currNode = currNode.next;
        count++;
    }
    return count;
};


//Optimized slightly better than O(2N) - Using slow pointer and fast pointer.
//First we start the start pointer and let it reach the Nth position.
//then we start the slow pointer and fast pointer together
//as soon as the fast poionter reaches the end the slow pointer is sitting 
//at the ideal position for us to remove an element.
var removeNthFromEnd = function(head, n) {
    let fastPointer = head;
    let slowPointer = head;
    
    for(let i = 0; i < n; i++) {
        fastPointer = fastPointer.next;
    }
    
    if(fastPointer===null) {
        head = head.next;
        return head;
    }
    
    while(fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    slowPointer.next = slowPointer.next.next; //to remove the nth node.
    return head; //return the list by removing the required node.
};