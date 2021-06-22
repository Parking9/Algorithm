function solution(n, score, time) {
  let maxV = Number.MIN_SAFE_INTEGER;
  let maxN = score.length;
  function dfs(idx, cs, t) {
    if (t > n) {
      return;
    }
    if (idx === maxN) {
      maxV = Math.max(cs, maxV);
      return;
    } else {
      dfs(idx + 1, cs + score[idx], t + time[idx]);
      dfs(idx + 1, cs, t);
    }
  }
  dfs(0, 0, 0);
  return maxV;
}
let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
