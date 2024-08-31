type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = {value: item} as Node<T>;

        this.length++;
        if(!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if(idx > this.length) return;
        if(idx < 0) return;
        if(idx == 0) {
            this.prepend(item);
            return;
        }
        if(idx == this.length) {
            this.append(item);
            return;
        }

        let curr = this.head;
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        const newNode = {value: item} as Node<T>;
        this.length++;
        newNode.next = curr;
        newNode.prev = curr?.prev;
        if(curr && curr.prev) curr.prev.next = newNode;
        if(curr) curr.prev = newNode;
    }

    append(item: T): void {
        const newNode = {value: item} as Node<T>;
        this.length++;
        if(!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for(let i = 0; curr && i < this.length; i++) {
            if(curr.value == item) break;
            curr = curr.next;
        }

        if(!curr) return;
        this.length--;
        if(curr.prev) curr.prev.next = curr.next;
        if(curr.next) curr.next.prev = curr.prev;
        if(curr == this.head) this.head = curr.next;
        if(curr == this.tail) this.tail = curr.prev;
        return curr.value;
    }

    get(idx: number): T | undefined {
        if(idx > this.length) return;
        if(idx < 0) return;

        let curr = this.head;
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr?.value;
    }

    removeAt(idx: number): T | undefined {
        if(idx > this.length) return;
        if(idx < 0) return;

        let curr = this.head;
        for(let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        if(!curr) return;
        this.length--;
        if(curr.prev) curr.prev.next = curr.next;
        if(curr.next) curr.next.prev = curr.prev;
        if(curr == this.head) this.head = curr.next;
        if(curr == this.tail) this.tail = curr.prev;

        return curr.value;
    }

}