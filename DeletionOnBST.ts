interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function DeletionOnBST(root: TreeNode | null, key: number): TreeNode | null {
    if(!root) return null;
    if(root.value > key) root.left = DeletionOnBST(root.left, key);
    if(root.value < key) root.right = DeletionOnBST(root.right, key);
    if(root.value == key) {
        if(!root.left && !root.right) return null; // leaf node
        // the node has only one child node | START
        if(!root.left) return root.right;
        if(!root.right) return root.left;
        // END

        // the node has two child node | START
        let temp = root.right;
        while(temp.left) {
            temp = temp.left;
        }
        root.value = temp.value;
        root.right = DeletionOnBST(root.right, temp.value);
        // END
    }

    return root;
}