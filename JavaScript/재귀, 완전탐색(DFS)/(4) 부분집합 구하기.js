function solution(n) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);
  const dfs = function (L) {
    if (L === n + 1) {
      let temp = [];
      for (let i = 1; i < n + 1; i++) {
        if (check[i] === 1) {
          temp.push(i);
        }
      }
      if (temp.length !== 0) {
        answer.push(temp);
      }
      return;
    } else {
      check[L] = 1;
      dfs(L + 1);
      check[L] = 0;
      dfs(L + 1);
    }
  };
  dfs(1);
  return answer;
}
console.log(solution(3));
