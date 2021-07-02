function solution(s, e) {
  let visited = Array.from({ length: 10000 }, () => 0);
  let queue = [[s, 0]];
  let answer;
  while (queue.length != 0) {
    let [c, curr] = queue.shift();
    if (c === e) {
      answer = curr;
      break;
    }
    for (let n of [c + 1, c - 1, c + 5]) {
      if ((1 <= n) & (n <= 10000)) {
        if (!visited[n]) {
          visited[n] = 1;
          queue.push([n, curr + 1]);
        }
      }
    }
  }
  return answer;
}
console.log(solution(5, 14));
console.log(solution(8, 3));
