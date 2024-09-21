export default class MinHeap {
    public length: number;
    private list: Array<number>

    constructor() {
        this.length = 0;
        this.list = [];
    }

    insert(value: number): void {
        this.list.push(value);
        let childIndex = this.list.length - 1;
        while(this.hasParentIndex(childIndex)) {
            const parentIndex= this.getParentIndex(childIndex);
            if(this.shouldSwap(childIndex, parentIndex)) {
                this.swapElements(childIndex, parentIndex);
                childIndex = this.getParentIndex(parentIndex);
            }
            else break;
        }
        this.heapify(0);
        this.length = this.list.length;
    }

    delete(): number {
        let deletedElement;
        if(this.list.length === 0) throw new Error("This Heap is Empty!!");
        if(this.list.length === 1) deletedElement = this.list.pop();
        else {
            deletedElement = this.swapToRemove();
            this.heapify(0);
        }

        this.length = this.list.length;
        return deletedElement as number;
    }

    /**
     * Decide the child node should be swaped with its parent node or node
     * If this is a minHeap, you should compare whether the child node is lesser than parent node or not.
     * If this is a maxHeap, you should compare whether the child node is bigger than parent node or not.
     * @param childIndex 
     * @param parentIndex 
     * @returns 
     */
    shouldSwap(childIndex: number, parentIndex: number): boolean {
        return this.list[childIndex] < this.list[parentIndex];
    }

    swapToRemove(): number {
        this.swapElements(this.list.length - 1, 0);
        return this.list.pop() as number;
    }

    swapElements(childIndex: number, parentIndex: number): void {
        [this.list[childIndex], this.list[parentIndex]] = 
            [this.list[parentIndex], this.list[childIndex]]
    }

    getParentIndex(childIndex: number): number {
        if(childIndex < 0) return -1;
        return Math.floor((childIndex-1)/2);
    }

    hasParentIndex(childIndex: number): boolean {
        if(childIndex >= this.list.length) return false;
        const value = this.getParentIndex(childIndex);
        return value >= 0;
    }

    getLeftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }

    heapify(index = 0): void {
        let left = this.getLeftChildIndex(index),
            right = this.getRightChildIndex(index),
            largest = index;
        
            if(this.list[left] && this.shouldSwap(left, largest)) {
                largest = left;
            }

            if(this.list[right] && this.shouldSwap(right, largest)) {
                largest = right;
            }

            if(largest !== index) {
                this.swapElements(largest, index);
                this.heapify(largest);
            }
    }
}