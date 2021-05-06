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
    let answer = new Set();
    let idx = Array.from({ length: N }, (v, idx) => idx);
    for (let i of idx) {
        let idx2 = idx.filter((v, index) => {
            return v != i;
        });
        for (let j of idx2) {
            let idx3 = idx2.filter((v, index) => {
                return v != j;
            });
            for (let k of idx3) {
                answer.add(arr[i] + arr[j] + arr[k]);
            }
        }
    }
    answer = Array.from(answer).sort((a, b) => b - a);
    return answer[K - 1];
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
