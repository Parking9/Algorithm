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
                if (i < j) {
                    arr.splice(j, 1);
                    arr.splice(i, 1);
                    return arr;
                } else {
                    arr.splice(i, 1);
                    arr.splice(j, 1);
                    return arr;
                }
            }
        }
    }
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
