type Node<T> = {
  value: T;
  next: Node<T> | undefined;
};

export default class Queue<T> {
  private _length = 0;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {T} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item: T): number {
    this._length++;
    const newNode = { value: item, next: undefined };
    if (!this.tail) {
      this.head = this.tail = newNode;
      return this.length();
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this.length();
  }

  /**
   * Removes an item from the front of the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue(): T | undefined {
    if (!this.head) return undefined;
    this._length--;
    let head = this.head;
    this.head = this.head.next;
    if (!this.head) {
      // ※※※ need to be careful while the list is empty after deqeueing the last element, you need to let tail point to undefined
      this.tail = undefined;
    }

    head.next = undefined;
    return head.value;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty(): boolean {
    return this.length() === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front(): T | undefined {
    if (!this.head) return undefined;
    return this.head.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {T | undefined} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back(): T | undefined {
    if (!this.tail) return undefined;
    return this.tail.value;
  }

  peek(): T | undefined {
    if(!this.head) return undefined;
    return this.head.value;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length(): number {
    return this._length;
  }
}