function solution(n, f) {
  let myArray = [];
  function getArray(m) {
    if (m === 1) {
      myArray = [1];
    } else if (m === 2) {
      myArray = [1, 1];
    } else {
      while (myArray.length !== m) {
        let temp = [1];
        for (let i = 0; i < myArray.length - 1; i++) {
          temp.push(myArray[i] + myArray[i + 1]);
        }
        temp.push(1);

        myArray = temp.slice();
      }
    }
  }
  getArray(n);
  let answer = [];
  let sub = Array.from({ length: n }, () => 0);
  let visited = Array.from({ length: n + 1 }, () => 0);
  function dfs(i, c) {
    if (i === n) {
      if (c === f) {
        answer.push(sub.slice());
      }
      return;
    } else {
      if (c >= f) {
        return;
      } else {
        for (let k = 1; k < n + 1; k++) {
          if (visited[k] === 0) {
            visited[k] = 1;
            sub[i] = k;
            dfs(i + 1, c + myArray[i] * k);
            visited[k] = 0;
            sub[i] = 0;
          }
        }
      }
    }
  }
  dfs(0, 0);
  answer.sort((a, b) => a[0] - b[0]);
  return answer[0];
}
console.log(solution(4, 16));
