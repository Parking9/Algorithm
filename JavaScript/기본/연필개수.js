function solution(N) {
    let answer;
    answer = Math.ceil(N / 12);
    // if (N % 12 == 0) {
    //     answer = parseInt(N / 12);
    // } else {
    //     answer = Math.ceil(N / 12);
    // }
    return answer;
}
console.log(solution(25));
console.log(solution(178));
