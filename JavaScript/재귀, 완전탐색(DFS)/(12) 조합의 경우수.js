function solution(n, m) {
  let temp = Array.from({ length: 35 }, () =>
    Array.from({ length: 35 }, () => 0)
  );
  function dfs(i, j) {
    if (temp[i][j] > 0) {
      return temp[i][j];
    }
    if ((i === j) | (j === 0)) {
      return 1;
    } else {
      return (temp[i][j] = dfs(i - 1, j - 1) + dfs(i - 1, j));
    }
  }
  let answer = dfs(n, m);
  return answer;
}
// console.log(solution(5, 3));
console.log(solution(33, 19));
