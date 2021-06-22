function solution(n, arr) {
  let maxV = Number.MIN_SAFE_INTEGER;
  let maxIdx = arr.length;
  function dfs(idx, cs) {
    if (cs > n) {
      return;
    }
    if (idx === maxIdx) {
      maxV = Math.max(maxV, cs);
      return;
    } else {
      dfs(idx + 1, cs + arr[idx]);
      dfs(idx + 1, cs);
    }
  }
  dfs(0, 0);
  return maxV;
}
let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
