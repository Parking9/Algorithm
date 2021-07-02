function solution(arr) {
  let answer = 0;
  let n = arr.length;
  function dfs(i, j) {
    let code = [];
    for (let k = -1; k <= 1; k++) {
      for (let k2 = -1; k2 <= 1; k2++) {
        code.push([i + k, j + k2]);
      }
    }
    for (let [c1, c2] of code) {
      if ((0 <= c1) & (c1 < n) & (0 <= c2) & (c2 < n)) {
        if (arr[c1][c2] === 1) {
          arr[c1][c2] = 0;
          dfs(c1, c2);
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        answer += 1;
        arr[i][j] = 0;
        dfs(i, j);
      }
    }
  }
  return answer;
}
let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
