function std() {
  var fs = require('fs');
  return fs.readFileSync('/dev/stdin').toString().trim();
}

function solution(myinput) {
  let [params, ...coins] = myinput.split('\n');
  let [N, K] = params.split(' ').map(Number);
  coins = coins.map(Number);
  let answer = 0;

  for (let idx = N - 1; idx >= 0; idx--) {
    if (coins[idx] <= K) {
      let temp = Math.floor(K / coins[idx]);
      K -= temp * coins[idx];
      answer += temp;
    }
    if (K === 0) {
      break;
    }
  }
  return answer;
}
console.log(solution(std()));
