function solution(string) {
    let answer = "";
    for (let i of string) {
        let i2 = i.toUpperCase();
        if (i === i2) {
            answer += i;
        } else {
            answer += i2;
        }
    }
    return answer;
}
console.log(solution("ItisTimeToStudy"));
