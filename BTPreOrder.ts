interface BinaryNode<T> {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    var result = [];
    if(head) {
        result.push(head.value);
        if(head.left) result.push(...pre_order_search(head.left));
        if(head.right) result.push(...pre_order_search(head.right));
    }

    return result;
}