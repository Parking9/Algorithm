function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        if (arr[i][j]) {
          answer += 1;
          let que = [[i, j]];
          visited[i][j] = 1;
          while (que.length !== 0) {
            let [ni, nj] = que.shift();
            for (let k = -1; k <= 1; k++) {
              for (let k2 = -1; k2 <= 1; k2++) {
                if (
                  (0 <= ni + k) &
                  (ni + k < n) &
                  (0 <= nj + k2) &
                  (nj + k2 < n)
                ) {
                  if (!visited[ni + k][nj + k2] & arr[ni + k][nj + k2]) {
                    visited[ni + k][nj + k2] = 1;
                    que.push([ni + k, nj + k2]);
                  }
                }
              }
            }
          }
        }
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
