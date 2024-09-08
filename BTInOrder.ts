interface BinaryNode<T> {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    var result: number[] = []
    if(head) {
        if(head.left) result.push(...in_order_search(head.left));
        result.push(head.value);
        if(head.right) result.push(...in_order_search(head.right));
    }
    return result;
}