function solution(arr) {
    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < answer) {
            answer = arr[i];
        }
    }
    return answer;
}
let arr = [5, 7, 3, 2, 9, 11];
console.log(solution(arr));
