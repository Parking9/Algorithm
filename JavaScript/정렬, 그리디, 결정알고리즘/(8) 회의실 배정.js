function solution(arr) {
  arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] === b[0]) {
      if (a[1] < b[1]) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  });
  let cand = arr
    .filter((ar) => {
      return ar[0] < arr[0][1];
    })
    .map((a) => {
      return arr.indexOf(a);
    });
  let maxV = -1;
  for (let i of cand) {
    let curr = arr[i][1];
    let cnt = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][0] < curr) {
        continue;
      } else {
        curr = arr[j][1];
        cnt += 1;
      }
    }
    if (cnt >= maxV) {
      maxV = cnt;
    }
  }
  return maxV;
}
// let arr = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ];
// console.log(solution(arr));
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr2));
