function solution(arr) {
    let answer = [],
        sumv = 0;
    sumv = arr.reduce((n, curr) => {
        return n + curr;
    }, 0);
    let diff = sumv - 100;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == diff) {
                answer.push([i, j]);
            }
        }
    }
    console.log(answer);
    return answer;
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
