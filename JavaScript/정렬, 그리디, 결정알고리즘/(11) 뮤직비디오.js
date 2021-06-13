function solution(n, arr) {
  arr.sort((a, b) => a - b);
  let left = Math.max(...arr),
    right = arr.reduce((a, b) => a + b),
    mid = Math.floor((left + right) / 2);
  let len = arr.length;
  while (left <= right) {
    let idx = 0,
      stopped = false,
      curr = 0,
      maxV = [],
      cnt = 0;
    while (idx != len) {
      if (cnt > n) {
        stopped = true;
        break;
      }
      if (curr + arr[idx] > mid) {
        maxV.push(curr);
        cnt += 1;
        curr = arr[idx];
      } else {
        curr += arr[idx];
      }
      idx += 1;
    }
    if (!stopped) {
      cnt += 1;
      maxV.push(curr);
    }
    if (stopped | (cnt > n)) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    } else {
      if (cnt < n) {
        right = mid - 1;
        mid = Math.floor((left + right) / 2);
      } else {
        let maxN = Math.max(...maxV);
        if (maxN < mid) {
          right = mid - 1;
          mid = Math.floor((left + right) / 2);
        } else if (maxN > mid) {
          left = mid + 1;
          mid = Math.floor((left + right) / 2);
        } else {
          return mid;
        }
      }
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
