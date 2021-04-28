function solution(arr) {
    let answer = 0,
        maxV = Number.MIN_SAFE_INTEGER;
    for (let i of arr) {
        if (i > maxV) {
            answer += 1;
            maxV = i;
        }
    }
    return answer;
}
console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
