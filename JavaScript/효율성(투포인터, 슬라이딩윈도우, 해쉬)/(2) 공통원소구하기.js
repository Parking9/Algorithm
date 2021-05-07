function solution(a, b) {
    let answer = [];
    let a2 = a.sort((a, b) => {
        return a - b;
    });
    for (let i of a2) {
        if (b.indexOf(i) !== -1) {
            answer.push(i);
        }
    }
    return answer;
}
let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
