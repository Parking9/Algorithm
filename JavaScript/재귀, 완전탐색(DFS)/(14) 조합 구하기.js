function solution(n, m) {
  let answer = [],
    arr = Array.from({ length: n }, (a, b) => b + 1),
    temp = Array.from({ length: m }, () => 0);
  const dfs = function (L, v) {
    if (L === m) {
      answer.push(JSON.parse(JSON.stringify(temp)));
    } else {
      for (let i = v; i < n; i++) {
        temp[L] = arr[i];
        dfs(L + 1, i + 1);
      }
    }
  };
  dfs(0, 0);
  return answer;
}
console.log(solution(4, 2));
