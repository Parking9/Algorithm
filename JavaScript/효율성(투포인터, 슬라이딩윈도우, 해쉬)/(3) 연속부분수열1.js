function solution(n, arr) {
    let answer = 0;
    let answer2 = [];
    for (let i = 0; i < arr.length; i++) {
        let sumv = n;
        let temp = [];
        for (let j = i; j < arr.length; j++) {
            sumv -= arr[j];
            if (sumv == 0) {
                temp.push(arr[j]);
                answer += 1;
                answer2.push(temp);
                break;
            } else if (sumv < 0) {
                break;
            } else {
                temp.push(arr[j]);
                continue;
            }
        }
    }
    console.log(answer2);
    return answer;
}
let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
