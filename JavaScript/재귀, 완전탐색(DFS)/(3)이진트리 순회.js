function solution(n) {
  function DFS(i) {
    if (i > 7) {
      return;
    }
    DFS(2 * i);
    console.log(i);
    DFS(2 * i + 1);
  }
  DFS(1);
}
console.log(solution(1));
