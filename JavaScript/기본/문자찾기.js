function solution(string, s) {
    let answer = 0;
    // for (let i of string) {
    //     if (i === s) {
    //         answer += 1;
    //     }
    // }
    answer = string.split(s).length - 1;
    return answer;
}
const string = "COMPUTERPROGRAMMING";
console.log(solution("COMPUTERPROGRAMMING", "R"));
