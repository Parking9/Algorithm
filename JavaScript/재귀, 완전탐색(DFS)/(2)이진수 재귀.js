function solution(n) {
  let ans = '';
  function DFS(i) {
    if (i === 0) {
      return;
    } else if (i === 1) {
      ans = '1' + ans;
      return;
    } else {
      ans = `${i % 2}` + ans;
      DFS(parseInt(i / 2));
    }
  }
  DFS(n);
  return ans;
}
console.log(solution(11));
