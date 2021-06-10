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
        while(holdPointer) {
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
        if(!this.root){
            return;
        }
        let holdPointer = this.root;
        while(holdPointer && holdPointer.value !== value) {
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
        if(!this.root){
            return;
        }
        let holdPointer = this.root;
        let prevNode = null;
        while(holdPointer && holdPointer.value !== value) {
            prevNode = holdPointer;
            if (holdPointer.value <= value) {
                holdPointer = holdPointer.right;
                if(holdPointer.value === value) {
                    prevNode.right = this.findValidReplaceCandidateNode(holdPointer);
                    prevNode.right.left = holdPointer.left;
                    break;
                }
            } else {
                holdPointer = holdPointer.left;
                if(holdPointer.value === value) {
                    prevNode.left = this.findValidReplaceCandidateNode(holdPointer);
                    prevNode.left.left = holdPointer.left;
                    break;
                }     
            }
        }
        //console.log(JSON.stringify(traverse(tree.root)));
    }

    findValidReplaceCandidateNode(currNode) {
        if(!currNode.right.left) {
            return currNode.right;
        } else {
            currNode = currNode.right.left;
            while(currNode.left) {
                currNode = currNode.left;
            }
            return currNode;
        }
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
tree.remove(20);
console.log(JSON.stringify(tree.lookup(20)));
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
