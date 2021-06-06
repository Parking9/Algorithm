function solution(n, arr) {
  arr.sort((a, b) => a - b);
  let first = 0,
    last = arr.length,
    mid;
  while (first <= last) {
    mid = Math.floor((first + last) / 2);
    if (arr[mid] === n) {
      return mid + 1;
    } else {
      if (arr[mid] < n) {
        first = mid + 1;
      } else {
        last = mid - 1;
      }
    }
  }
  return -1;
}
let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
