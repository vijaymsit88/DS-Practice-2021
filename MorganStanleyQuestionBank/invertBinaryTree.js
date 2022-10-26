//https://leetcode.com/problems/invert-binary-tree/submissions/

var invertTree = function(root) {
    swapNodes(root);
    return root;
};

function swapNodes(node) { 
    if(node == null) {
        return;
    }
    let temp  = node.left;
    node.left = node.right;
    node.right = temp;
   
    swapNodes(node.left);
    swapNodes(node.right);
}