function solution(arr) {
    // let answer = [];
    // for (i of arr) {
    //     if (answer.indexOf(i) === -1) {
    //         answer.push(i);
    //     }
    // }
    // return answer;
    return arr.filter((v, i) => {
        if (arr.indexOf(v) === i) {
            return v;
        }
    });
}
console.log(solution(["good", "time", "good", "time", "student"]));
