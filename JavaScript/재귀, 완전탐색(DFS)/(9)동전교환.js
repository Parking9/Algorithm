function solution(n, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  arr.sort((a, b) => b - a);
  let m = arr.length;
  function dfs(idx, cunsum, ans) {
    if (cunsum === n) {
      answer = Math.min(ans, answer);
      return;
    }
    if (idx === m) {
      return;
    } else {
      for (let i = parseInt(n / arr[idx]); i > -1; i--) {
        dfs(idx + 1, cunsum + arr[idx] * i, ans + i);
      }
    }
  }
  dfs(0, 0, 0);
  return answer;
}
let arr = [1, 2, 5];
console.log(solution(15, arr));
