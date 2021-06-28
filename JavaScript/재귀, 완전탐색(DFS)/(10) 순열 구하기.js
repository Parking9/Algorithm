function solution(n, arr) {
  let answer = [];
  let visited = Array.from({ length: arr.length }, () => 0);
  let temp = Array.from({ length: n }, () => 0);
  function dfs(lv) {
    if (lv === n) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (visited[i] == 0) {
          visited[i] = 1;
          temp[lv] = arr[i];
          dfs(lv + 1);
          visited[i] = 0;
        }
      }
    }
  }
  dfs(0);
  return answer;
}
let arr = [3, 6, 9];
console.log(solution(2, arr));
