import { BinaryTree, Node } from './binaryTree.js';

// function inorderTraversal(root) {
//    while(!root.left) {
//     inorderTraversal(root.left);
//    }
//    console.log(root.left.value);
//    console.log(root.value);
//    console.log(root.right.value);
// }

//O(n) --> time
//O(h) --> space (h -> height of tree)
//Left Root Right  --> Root is in
function traverseInOrder(node) {
    if (node) {
        traverseInOrder(node.left); //Left
        console.log(node.value); //Root
        traverseInOrder(node.right); //Right
    }
}

//O(n) --> time
//O(h) --> space (h -> height of tree)
//Root Left Right  --> Root is pre
function traversePreOrder(node) {
    if (node) {
        console.log(node.value);
        traversePreOrder(node.left);
        traversePreOrder(node.right);
    }
}

//O(n) --> time
//O(h) --> space (h -> height of tree)
//Left Right Root  --> Root is post
function traversePostOrder(node) {
    if (node) {
        traversePostOrder(node.left); 
        traversePostOrder(node.right);
        console.log(node.value);
    }
}

const binTree = new BinaryTree();
binTree.root = new Node(10);
binTree.root.left = new Node(20);
binTree.root.right = new Node(30);
binTree.root.right.left = new Node(40);
binTree.root.right.right = new Node(50);
let arr = [];

//traverseInOrder(binTree.root, arr);
//traversePreOrder(binTree.root, arr);
traversePostOrder(binTree.root, arr);
console.log(arr);