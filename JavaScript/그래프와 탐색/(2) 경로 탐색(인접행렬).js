function solution(n, arr) {
  let answer = 0;
  let dir = Array.from({ length: 21 }, () => []);
  let visited = Array.from({ length: 21 }, () => 0);
  for (let i of arr) {
    dir[i[0]].push(i[1]);
  }
  function dfs(i) {
    if (i === n) {
      answer += 1;
      console.log(path);
      return;
    } else {
      for (let j of dir[i]) {
        if (visited[j] === 0) {
          visited[j] = 1;
          path.push(j);
          dfs(j);
          path.pop(j);
          visited[j] = 0;
        }
      }
    }
  }
  let path = [1];
  visited[1] = 1;
  dfs(1);
  return answer;
}
let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
