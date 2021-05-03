function solution(str) {
    let answer = "YES";
    let len = str.length;
    for (let i = 0; i < len; i++) {
        if (
            65 <= str[i].toUpperCase().charCodeAt() &&
            str[i].toUpperCase().charCodeAt() <= 90
        ) {
            if (str[i].toUpperCase() != str[len - 1 - i].toUpperCase()) {
                answer = "NO";
                break;
            }
        }
    }
    return answer;
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
