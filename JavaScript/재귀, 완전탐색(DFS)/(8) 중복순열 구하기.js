function solution(n, m) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);
  function dfs(idx) {
    if (idx === m) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = 1; i < n + 1; i++) {
        temp[idx] = i;
        dfs(idx + 1);
      }
    }
  }
  dfs(0);
  return answer;
}
console.log(solution(3, 2));
