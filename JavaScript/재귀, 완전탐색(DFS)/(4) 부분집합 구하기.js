function solution(n) {
  let answer = [];
  let visited = Array.from({ length: n + 1 }, () => 0);
  function dfs(i) {
    if (i === n + 1) {
      let temp = [];
      for (let j = 1; j < n + 1; j++) {
        if (visited[j] === 1) {
          temp.push(j);
        }
      }
      answer.push(temp);
      return;
    } else {
      visited[i] = 1;
      dfs(i + 1);
      visited[i] = 0;
      dfs(i + 1);
    }
  }
  dfs(1);
  return answer;
}
console.log(solution(3));
