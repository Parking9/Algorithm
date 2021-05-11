function solution(n, arr) {
    let answer = -1;
    for (let i = 0; i < arr.length - (n - 1); i++) {
        let sumv = 0;
        for (let j = i; j < i + n; j++) {
            sumv += arr[j];
        }
        answer = Math.max(sumv, answer);
    }
    return answer;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
