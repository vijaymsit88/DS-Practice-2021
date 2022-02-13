class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        this.addToTargetParentNode(value);
    }

    addToTargetParentNode(value) {
        let holdPointer = this.root;
        let prevNode = null;
        const newNode = new Node(value);
        while (holdPointer) {
            prevNode = holdPointer;
            if (holdPointer.value <= value) {
                holdPointer = holdPointer.right;
                prevNode.right = !holdPointer ? newNode : prevNode.right;
            } else {
                holdPointer = holdPointer.left;
                prevNode.left = !holdPointer ? newNode : prevNode.left;
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return;
        }
        let holdPointer = this.root;
        while (holdPointer && holdPointer.value !== value) {
            if (holdPointer.value <= value) {
                holdPointer = holdPointer.right;
            } else {
                holdPointer = holdPointer.left;
            }
        }
        return holdPointer;
    }

    //Some more conditions needs to be addressed here for remove method, 
    //I have covered the most complex one, refer to Andrei's
    //video for more complete code and explanation.
    remove(value) {
        if (!this.root) {
            return;
        }
        let holdPointer = this.root;
        let prevNode = null;
        while (holdPointer && holdPointer.value !== value) {
            prevNode = holdPointer;
            if (holdPointer.value <= value) {
                holdPointer = holdPointer.right;
                if (holdPointer.value === value) {
                    prevNode.right = this.findValidReplaceCandidateNode(holdPointer);
                    prevNode.right.left = holdPointer.left;
                    break;
                }
            } else {
                holdPointer = holdPointer.left;
                if (holdPointer.value === value) {
                    prevNode.left = this.findValidReplaceCandidateNode(holdPointer);
                    prevNode.left.left = holdPointer.left;
                    break;
                }
            }
        }
        //console.log(JSON.stringify(traverse(tree.root)));
    }

    findValidReplaceCandidateNode(currNode) {
        if (!currNode.right.left) {
            return currNode.right;
        } else {
            currNode = currNode.right.left;
            while (currNode.left) {
                currNode = currNode.left;
            }
            return currNode;
        }
    }

    //BFS code
    BreadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            // using arrays like queues. Its ineffecient as array shift is an expensive operation, 
            // a Linked list could have been a better choice here, but this is just for demo purpose.
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    //BFS Recursive code
    BreadthFirstSearchR(queue, list) {
        if (!queue.length) {
            return list;
        }
        const currentNode = queue.shift();
        list.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        return this.BreadthFirstSearchR(queue, list);
    }

    DFTPreOrder() {
        return this.traversePreOrder(this.root, []);
    }
    DFTPostOrder() {
        return this.traversePostOrder(this.root, []);
    }
    DFTInOrder() {
        return this.traverseInOrder(this.root, []);
    }

    traversePreOrder(node, list) {
        list.push(node.value);
        if (node.left) {
            this.traversePreOrder(node.left, list);
        }
        if (node.right) {
            this.traversePreOrder(node.right, list);
        }
        return list;
    }

    traverseInOrder(node, list) {
        if (node.left) {
            this.traverseInOrder(node.left, list);
        }
        list.push(node.value);
        if (node.right) {
            this.traverseInOrder(node.right, list);
        }
        return list;
    }

    traversePostOrder(node, list) {
        if (node.left) {
            this.traversePostOrder(node.left, list);
        }
        if (node.right) {
            this.traversePostOrder(node.right, list);
        }
        list.push(node.value);
        return list;
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
//tree.remove(20);
console.log('BFS', tree.BreadthFirstSearch());
//console.log('BFS R', tree.BreadthFirstSearchR([tree.root], []));
// console.log(JSON.stringify(tree.lookup(20)));
// console.log(JSON.stringify(traverse(tree.root)));
//console.log('DFSpreorder', tree.DFTPreOrder());
//console.log('DFSinorder', tree.DFTInOrder());
//console.log('DFSpostorder', tree.DFTPostOrder());

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
