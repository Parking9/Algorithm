function solution(string) {
    let answer = "";
    for (let i of string) {
        i2 = i.toUpperCase();
        if (i === i2) {
            answer += i.toLowerCase();
        } else {
            answer += i2;
        }
    }
    return answer;
}
console.log(solution("StuDY"));
