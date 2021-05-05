// function permutation(arr, n) {
//     let result = [];
//     if (n === 1) {
//         return arr.map((v) => [v]);
//     }
//     arr.forEach((v, idx, arr) => {
//         const fixer = v;
//         const restArr = arr.filter((_, index) => {
//             return index != idx;
//         });
//         const permutationArr = permutation(restArr, n - 1);
//         const combineFixer = permutationArr.map((v) => [fixer, ...v]);
//         result.push(...combineFixer);
//     });
//     return result;
// }

function solution(N, K, arr) {
    let answer = [];
    let idx = Array.from({ length: N }, (v, idx) => idx);
    for (let i = 0; i < N; i++) {
        let idx2 = idx.filter((v, index) => {
            return index != i;
        });
        for (j of idx2) {
            let idx3 = idx2.filter((v, index) => {
                return index != j;
            });
            for (k of idx3) {
                answer.push(arr[i] + arr[j] + arr[k]);
            }
        }
    }
    answer = Array.from(new Set(answer.sort((a, b) => b - a)));
    console.log(answer);
    return answer[K - 1];
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
