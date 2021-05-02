function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    n = arr.length;
    let cross1 = 0;
    let cross2 = 0;
    for (let i = 0; i < n; i++) {
        if (
            arr[i].reduce((a, b) => {
                a + b;
            }, 0) > answer
        ) {
            answer = arr[i].reduce((a, b) => {
                a + b;
            }, 0);
        }
        let sumV = 0;
        for (let j = 0; j < n; j++) {
            sumV += arr[j][i];
        }
        if (sumV > answer) {
            answer = sumV;
        }

        cross1 += arr[i][i];
        cross2 += arr[i][n - 1 - i];
    }
    if (cross1 > answer) {
        answer = cross1;
    }
    if (cross2 > answer) {
        answer = cross2;
    }

    return answer;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];
console.log(solution(arr));
