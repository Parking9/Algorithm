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
    // let answer = new Map();
    // let ans2,
    //     ans = -1;
    // for (let i of str) {
    //     if (answer.has(i)) {
    //         answer.set(i, answer.get(i) + 1);
    //     } else {
    //         answer.set(i, 1);
    //     }
    // }
    // for (let [key, val] of answer) {
    //     if (ans < val) {
    //         ans = val;
    //         ans2 = key;
    //     }
    // }
    // return ans2;
}
let str = "BACBACCACCBDEDE";
console.log(solution(str));
