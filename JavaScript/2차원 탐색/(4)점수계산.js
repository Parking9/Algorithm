function solution(arr) {
    let answer = 0,
        corr = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            answer += 1;
            answer += corr;
            corr += 1;
        } else {
            corr = 0;
        }
    }
    return answer;
}
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
