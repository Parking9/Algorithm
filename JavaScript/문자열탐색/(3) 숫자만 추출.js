function solution(str) {
    let answer;
    arr = str.match(/\d/g);
    answer = arr.reduce((a, b) => a + b, "");
    answer = parseInt(answer);
    return answer;
}
let str = "g0en2T0s8eSoft";
console.log(solution(str));
