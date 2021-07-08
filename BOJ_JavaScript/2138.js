function std() {
  let fs = require('fs');
  return fs.readFileSync('dev/stdin').toString().trim();
}

function solution(input) {
  let [N, ...arr] = input.split('\n');
  N = parseInt(N);
  let temp1 = arr[0];
  let temp2 = arr[0].splice(0, 2, [arr.slice(0, 1)]);
  let str1 = arr[1];
  let answer = [0];
  let answer2 = [1];

  let cnt = 1;
  while (cnt < N) {}
}
console.log(solution(std()));
