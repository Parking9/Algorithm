function solution(string) {
    // ls = string.length;
    // answer = "";
    // for (let i = 0; i < ls; i++) {
    //     if (string[i] === "A") {
    //         answer += "#";
    //     } else {
    //         answer += string[i];
    //     }
    // }
    // return answer;

    answer = "";
    for (let i of string) {
        if (i === "A") {
            answer += "#";
        } else answer += i;
    }
    return answer;

    // answer = string;
    // answer = answer.replace(/A/g, "#");
    // return answer;
}
const string = "BANANA";
console.log(solution(string));
