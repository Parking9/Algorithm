function solution(n, arr) {
  let answer = [];
  while (arr.length !== 0) {
    let first = arr.shift();
    let idx = answer.indexOf(first);
    if (idx === -1) {
      answer.unshift(first);
    } else {
      answer.splice(idx, 1);
      answer.unshift(first);
    }
  }
  return answer.slice(0, n);
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
