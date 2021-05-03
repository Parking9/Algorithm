// function search(str, idx, s) {
//     let cnt = 0;
//     while (1) {
//         if (str[idx - cnt] === s || str[idx + cnt] === s) {
//             return cnt;
//         } else {
//             cnt += 1;
//         }
//     }
// }

// function solution(str, s) {
//     let answer = [];
//     for (let i = 0; i < str.length; i++) {
//         answer.push(search(str, i, s));
//     }
//     return answer;
// }
function solution(str, s) {
    let answer = [];
    temp = 101;
    for (let i of str) {
        if (i == s) {
            temp = 0;
            answer.push(temp);
        } else {
            temp += 1;
            answer.push(temp);
        }
    }
    temp = 101;
    for (let j = answer.length - 1; j >= 0; j--) {
        if (str[j] == s) {
            temp = 0;
        } else {
            temp += 1;
            answer[j] = Math.min(answer[j], temp);
        }
    }
    return answer;
}
let str = "teachermode";
console.log(solution(str, "e"));
