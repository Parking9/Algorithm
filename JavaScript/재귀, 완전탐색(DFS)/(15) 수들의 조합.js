function solution(N, k, arr, m) {
  let answer = [];
  let temp = Array.from({ length: k }, () => 0);
  function dfs(l, s) {
    if (l === k) {
      if (temp.slice().reduce((v, c) => v + c, 0) % m === 0) {
        answer.push(temp.slice());
      }
      return;
    } else {
      for (let i = s; i < N; i++) {
        temp[l] = arr[i];
        dfs(l + 1, i + 1);
      }
    }
  }
  dfs(0, 0);
  console.log(answer);
  return answer.length;
}
let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
