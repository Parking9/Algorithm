function std() {
  let fs = require('fs');
  return fs.readFileSync('dev/stdin').toString().trim();
}

function solution(input) {
  let [params, ...arr] = input.split('\n');
  let [N, M] = params.split(' ').map(Number);
  arr = arr.map((a) => a.split('').map(Number));
  arr2 = arr.splice(N);
  let answer = 0;
  for (let i = 0; i <= N - 3; i++) {
    for (let j = 0; j <= M - 3; j++) {
      if (arr2[i][j] != arr[i][j]) {
        answer += 1;
        for (let i2 = i; i2 <= i + 2; i2++) {
          for (let j2 = j; j2 <= j + 2; j2++) {
            if (arr2[i2][j2]) {
              arr2[i2][j2] = 0;
            } else {
              arr2[i2][j2] = 1;
            }
          }
        }
      }
    }
  }
  for (let ni = 0; ni < N; ni++) {
    for (let nj = 0; nj < M; nj++) {
      if (arr[ni][nj] != arr2[ni][nj]) {
        return -1;
      }
    }
  }
  return answer;
}
console.log(solution(std()));
