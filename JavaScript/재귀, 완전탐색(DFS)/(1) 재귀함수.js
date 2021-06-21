function solution(n) {
  // let i = 1;
  // while (i <= n) {
  //   console.log(i);
  //   i++;
  // }
  const printN = function (i) {
    if (i <= n) {
      console.log(i);
      printN(i + 1);
    } else {
      return;
    }
  };
  printN(1);
}
console.log(solution(3));
