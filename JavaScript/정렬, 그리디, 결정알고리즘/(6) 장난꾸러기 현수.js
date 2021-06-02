function solution(arr) {
  const n = arr.length;
  let num,
    num2,
    checked = false;
  for (let i = 0; i < n; i++) {
    if ((i === 0) | (i === n - 1)) {
      if (i === 0) {
        if (arr[0] > arr[1]) {
          num = 0;
        }
      } else {
        if (arr[n - 1] < arr[n - 2]) {
          num2 = n - 1;
        }
      }
    } else {
      if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
        if (!checked) {
          num = i;
          checked = true;
        }
      }
      if (arr[i] < arr[i - 1]) {
        num2 = i;
      }
    }
  }
  return [num + 1, num2 + 1];

  // const arr2 = JSON.parse(JSON.stringify(arr)).sort((a, b) => {
  //   return a - b;
  // });
  // let num, num2;
  // for (let i = 0; i < n; i++) {
  //   if (arr[i] != arr2[i]) {
  //     if (arr[i] > arr2[i]) {
  //       num = i;
  //     } else {
  //       num2 = i;
  //     }
  //   }
  // }
  // return [num + 1, num2 + 1];
}
let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
// let arr2 = [120, 130, 150, 150, 130, 150];
// console.log(solution(arr2));
