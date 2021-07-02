function solution(n, arr) {
  let dy = Array.from({ length: n + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = n; j >= arr[i][1]; j--) {
      dy[j] = Math.max(dy[j - arr[i][1]] + arr[i][0], dy[j]);
    }
  }
  console.log(dy);
  return dy[n];
}
let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
