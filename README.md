## What is this for?
This is the implementation of deletion of BST.

There are two cases in deletion that you need to deal with:

### **Case1)** the node which is the leaf node of BST or has only one child node.
- If the node is a leaf, it is simply removed.
- If the node has one child, it is replaced by its child.

### **Case2)** the node has two child nodes
- In this scenario, we replace the node with the in-order successor, which is the left-most node of the right subtree.