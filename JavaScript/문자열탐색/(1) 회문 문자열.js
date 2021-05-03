function solution(string) {
    let answer = "YES";
    let len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i].toUpperCase() === string[len - 1 - i].toUpperCase()) {
        } else {
            answer = "No";
            break;
        }
    }
    return answer;
    // reverse and join
    // string = string.toLowerCase();
    // if (string.split("").reverse().join("") != string) {
    //     return "No";
    // } else {
    //     return "Yes";
    // }
}
let str = "goooG";
let str2 = "gooG";
console.log(solution(str));
console.log(solution(str2));
