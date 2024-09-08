interface BinaryNode<T>  {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    var result: number[] = [];
    dfs(head);
    return result;

    // ------
    function dfs(node: BinaryNode<number>): void {
        if(!node) return;
        if(node.left) dfs(node.left);
        if(node.right) dfs(node.right);
        result.push(node.value);
    }
}