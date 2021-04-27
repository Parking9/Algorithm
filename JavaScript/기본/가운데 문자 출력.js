function solution(string) {
    let answer;
    ls = string.length;
    ls2 = Math.floor(ls / 2);
    // if (ls % 2 != 1) {
    //     answer += string[parseInt(ls / 2 - 1)];
    //     answer += string[parseInt(ls / 2)];
    // } else {
    //     answer = string[Math.floor(parseInt(ls / 2))];
    // }
    if (ls % 2 != 1) {
        answer = string.substring(ls2 - 1, ls2 + 1);
    } else {
        answer = string.substring(ls2, ls2 + 1);
    }
    return answer;
}
console.log(solution("study"));
console.log(solution("good"));
