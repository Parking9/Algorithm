function solution(n, arr) {
    let answer = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let temp = [arr[i]];
        if (
            temp.reduce((acc, curr) => {
                return acc + curr;
            }, 0) <= n
        ) {
            answer.push(temp);
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (
                temp.reduce((acc, curr) => {
                    return acc + curr;
                }, 0) +
                    arr[j] <=
                n
            ) {
                temp.push(arr[j]);
                answer.push(temp);
            }
        }
    }
    if (arr[arr.length - 1] <= n) {
        answer.push([arr[arr.length - 1]]);
    }
    console.log(answer);
    return answer.length;
}
let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
