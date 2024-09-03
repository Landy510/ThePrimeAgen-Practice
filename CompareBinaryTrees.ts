export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if(a === null && b === null) return true; // structral check
    if(a === null || b === null) return false; // structral check
    if(a.value !== b.value) return false; // value check
    return compare(a.left, b.left) && compare(a.right, b.right);
}