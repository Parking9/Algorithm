function solution(arr) {
  const n = arr.length;
  let arr2 = JSON.parse(JSON.stringify(arr));
  arr2.sort((a, b) => {
    return a - b;
  });
  let answer = [],
    num,
    num2;
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr2[i]) {
      // if (arr[i] > arr2[i]) {
      //   num = i;
      // } else {
      //   num2 = i;
      // }
      answer.push(i + 1);
    }
  }
  return answer;
  // return [num + 1, num2 + 1];
}
// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// console.log(solution(arr));
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr2));
