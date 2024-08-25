function qs(arr: number[], low: number, high: number): void {
  if(low >= high) return;
  const pivotIndex = partition(arr, low, high);
  qs(arr, low, pivotIndex-1);
  qs(arr, pivotIndex+1, high);
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let idx = low - 1;

  for(let j = low; j < high; j++) {
      if(arr[j] < pivot) {
          idx++;
          [arr[j], arr[idx]] = [arr[idx], arr[j]];
      }
  }

  // switch pivot's position(arr[high]) with the position that is next to(arr[idx+1]) the last element which lower than pivot
  const toBePivotIndex = idx + 1;
  arr[high] = arr[toBePivotIndex];
  arr[toBePivotIndex] = pivot;

  return toBePivotIndex;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length-1);
}