export default function bubble_sort(arr: number[]): void {
  // i is the index that indicates the amount of elements that need to be compared
  // n, n-1, n-2, ..., etc
  for(let i = arr.length; i > 0; i--) { 
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}