type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const newNode = {value: item} as Node<T>;
        this.length++;
        if(!this.head) {
            this.head = newNode;
            return;
        }

        const head = this.head;
        this.head = newNode;
        this.head.prev = head;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if(this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head;
        this.head = head?.prev;
        return head?.value
    }

    peek(): T | undefined {
        if(!this.head) return undefined;
        return this.head.value;
    }
}