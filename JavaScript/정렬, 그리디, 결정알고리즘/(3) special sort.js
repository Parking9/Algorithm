function solution(arr) {
  L = arr.length;
  for (let i = 0; i < L - 1; i++) {
    let minIdx = arr.indexOf(Math.min(...arr.slice(i + 1)));
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
