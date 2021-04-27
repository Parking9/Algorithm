function solution(string) {
    // let answer;
    // answer = string.match(/[A-Z]/g).length;
    // return answer;

    let answer = 0;
    for (let i of string) {
        if (i === i.toUpperCase()) {
            answer += 1;
        }
    }
    return answer;
}
console.log(solution("KoreaTimeGood"));
