function solution(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);
  function dfs(i, s) {
    if (i === m) {
      answer.push(temp.slice());
    } else {
      for (let k = s; k <= n; k++) {
        temp[i] = k;
        dfs(i + 1, k + 1);
      }
    }
  }
  dfs(0, 1);
  return answer;
}
console.log(solution(4, 2));
