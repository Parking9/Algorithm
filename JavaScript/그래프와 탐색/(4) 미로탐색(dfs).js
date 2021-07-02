function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  function dfs(i, j) {
    if ((i === 6) & (j === 6)) {
      answer += 1;
    } else {
      for (let [c0, c1] of [
        [i - 1, j],
        [i, j + 1],
        [i + 1, j],
        [i, j - 1],
      ]) {
        if ((0 <= c0) & (c0 < n) & ((0 <= c1) & (c1 < n))) {
          if (!arr[c0][c1] & !visited[c0][c1]) {
            visited[c0][c1] = 1;
            dfs(c0, c1);
            visited[c0][c1] = 0;
          }
        }
      }
    }
  }
  visited[0][0] = 1;
  dfs(0, 0);
  return answer;
}
let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
