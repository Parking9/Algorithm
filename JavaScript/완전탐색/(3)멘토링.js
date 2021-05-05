function solution(N, M, arr) {
    let answer = 0;
    stu = Array.from({ length: N }, (v, i) => i + 1);

    for (let i of stu) {
        for (let j of stu.filter((s) => {
            return s != i;
        })) {
            let check = true;
            for (let n = 0; n < M; n++) {
                if (arr[n].indexOf(i) > arr[n].indexOf(j)) {
                    check = false;
                }
            }
            if (check === true) {
                answer += 1;
            }
        }
    }
    return answer;
}
let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
console.log(solution(4, 3, arr));
