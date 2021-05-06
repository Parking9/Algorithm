function solution(N, arr) {
    let answer = -1;

    for (let i = 0; i < arr.length; i++) {
        let sum = N - (Math.floor(arr[i][0] / 2) + arr[i][1]);
        let cnt = 1;
        console.log(...arr);
        let temp = arr.filter((v, index) => {
            return index != i;
        });
        temp = temp.map((t) => {
            return t[0] + t[1];
        });
        temp = temp.sort(function (a, b) {
            return a - b;
        });
        // console.log(...temp);
        for (let i of temp) {
            sum -= i;
            if (sum >= 0) {
                cnt += 1;
            } else {
                break;
            }
        }
        if (cnt >= answer) {
            answer = cnt;
        }
    }
    return answer;
}
let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];
console.log(solution(28, arr));
