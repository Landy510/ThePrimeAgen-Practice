function qs(arr: number[], low: number, high: number): void {
  if(low >= high) return;
  const pivotIndex = partition(arr, low, high);
  qs(arr, low, pivotIndex - 1);
  qs(arr, pivotIndex + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for(let j = low; j < high; j++) {
    if(arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // move pivot to the position the is behind the last element which is smaller than pivot.
  [arr[i+1],arr[high]] = [arr[high], arr[i+1]];
  return i + 1;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}