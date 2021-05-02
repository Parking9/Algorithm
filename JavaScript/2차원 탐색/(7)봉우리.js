function solution(arr) {
    let arr2 = JSON.parse(JSON.stringify(arr));
    let answer = 0;
    for (let ar of arr2) {
        ar.splice(0, 0, 0);
        ar.splice(ar.length, 0, 0);
    }
    arr2.splice(
        0,
        0,
        Array.from({ length: arr2[0].length }, () => 0)
    );
    arr2.splice(
        arr2.length,
        0,
        Array.from({ length: arr2[0].length }, () => 0)
    );
    let n = arr2.length;
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let center = arr2[i][j];
            if (center > arr2[i - 1][j]) {
                if (center > arr2[i][j + 1]) {
                    if (center > arr2[i + 1][j]) {
                        if (center > arr2[i][j - 1]) {
                            answer += 1;
                        }
                    }
                }
            }
        }
    }
    console.log(arr2);
    return answer;
}
let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];
console.log(solution(arr));
