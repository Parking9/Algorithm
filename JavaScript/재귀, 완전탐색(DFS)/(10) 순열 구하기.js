function solution(n, arr) {
  let answer = [],
    check = Array.from({ length: arr.length }, () => 0),
    temp = Array.from({ length: n }, () => 0);
  function dfs(L) {
    if (L === n) {
      answer.push(JSON.parse(JSON.stringify(temp)));
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = arr[i];
          dfs(L + 1);
          check[i] = 0;
        }
      }
    }
  }
  dfs(0);
  return answer;
}
let arr = [3, 6, 9];
console.log(solution(2, arr));
