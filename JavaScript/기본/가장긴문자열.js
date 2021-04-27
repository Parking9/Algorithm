function solution(arr) {
    let answer;
    la = arr.length;
    maxV = arr[0].length;
    for (let i = 1; i < la; i++) {
        if (arr[i].length > maxV) {
            answer = i;
            maxV = arr[i].length;
        }
    }
    return arr[answer];
}
console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
