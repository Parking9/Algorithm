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
  let maxV = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    let cnt = 1;
    while (arr[j][0] < arr[i][1]) {
      cnt += 1;
      j++;
    }
    maxV = Math.max(cnt, maxV);
  }
  return maxV;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
