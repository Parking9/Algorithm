function solution(n, arr) {
    let answer = -1,
        minV = 0;
    for (let i of arr) {
        let j = i;
        let sumV = 0;
        while (i >= 1) {
            let rest = i % 10;
            sumV += rest;
            i = parseInt(i / 10);
        }
        if (sumV >= minV) {
            if (j > answer) {
                answer = j;
            }
            minV = sumV;
        }
    }
    return answer;
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
