function solution(n) {
  let answer = 1;
  function dfs(i) {
    if (i === n) {
      answer *= n;
      return;
    } else {
      answer *= i;
      dfs(i + 1);
    }
  }
  dfs(1);
  return answer;
}
console.log(solution(5));
