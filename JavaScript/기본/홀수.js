function solution(arr) {
    let answer = 0,
        minV = Number.MAX_SAFE_INTEGER;
    let odds = arr.filter((n) => {
        return n % 2;
    });
    // for (let i of odds) {
    //     answer += i;
    //     if (i < minV) {
    //         minV = i;
    //     }
    // }
    answer = odds.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    minV = Math.min(...odds);
    console.log(answer);
    console.log(minV);
}
console.log(solution([12, 77, 38, 41, 53, 92, 85]));
