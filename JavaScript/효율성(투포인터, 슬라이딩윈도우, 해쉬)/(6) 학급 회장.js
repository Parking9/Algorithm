function solution(str) {
    let obj = {},
        answer = [];
    let arr = str.split("");

    for (i of arr) {
        if (Object.keys(obj).indexOf(i) !== -1) {
            obj[i] += 1;
        } else {
            obj[i] = 1;
        }
    }
    console.log(obj);
    for (j in obj) {
        answer.push([j, obj[j]]);
    }
    answer.sort((a, b) => b[1] - a[1]);
    return answer[0][0];
}
let str = "BACBACCACCBDEDE";
console.log(solution(str));
