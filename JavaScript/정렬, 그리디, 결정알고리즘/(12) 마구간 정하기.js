function solution(n, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  const count = function (c) {
    let curr = arr[0],
      cnt = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - curr >= c) {
        cnt++;
        curr = arr[i];
      }
    }
    return cnt;
  };
  let lt = 1,
    rt = arr[arr.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid) >= n) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}
let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
