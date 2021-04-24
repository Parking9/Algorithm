function solution(N) {
    let answer = 0;
    for (let i = 0; i <= N; i++) {
        answer += i;
    }
    return answer;
}
console.log(solution(6));
console.log(solution(10));
