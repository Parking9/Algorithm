function std() {
  let fs = require('fs');
  return fs.readFileSync('/dev/stdin').toString().trim();
}

function solution(myinput) {
  let [N, args] = myinput.split('\n');
  N = parseInt(N);
  args = args
    .trim()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let answer = args.reduce((acc, curr, idx) => {
    return acc + curr * (N - idx);
  }, 0);

  return answer;
}
console.log(solution(std()));
