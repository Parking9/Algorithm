function solution(arr) {
  let n = arr.length;
  let sumV = arr.reduce((p, v) => p + v, 0);
  if (sumV / 2 != parseInt(sumV / 2)) {
    return 'NO';
  }
  let stopped = false;
  const dfs = function (v, cunsum) {
    if (cunsum > parseInt(sumV / 2)) {
      return;
    }
    if (v === n) {
      if (sumV - cunsum === cunsum) {
        stopped = true;
        return;
      }
    } else {
      dfs(v + 1, cunsum + arr[v]);
      dfs(v + 1, cunsum);
    }
  };
  dfs(0, 0);
  if (stopped) {
    return 'YES';
  } else {
    return 'NO';
  }
}
let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
