function solution(str) {
    let answer = str[0],
        cnt = 1;
    for (s of str.slice(1)) {
        len = answer.length;
        if (answer[len - 1] === s) {
            cnt += 1;
        } else {
            if (cnt != 1) {
                answer += String(cnt);
            }
            answer += s;
            cnt = 1;
        }
    }
    if (cnt != 1) {
        answer += String(cnt);
    }
    return answer;
}
let str = "KKHSSSSSSSE";
console.log(solution(str));
