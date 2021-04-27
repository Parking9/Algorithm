function solution(string) {
    let answer = "";
    let v = [];
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === i) {
            answer += string[i];
        }
    }
    return answer;
}
console.log(solution("ksekkset"));
