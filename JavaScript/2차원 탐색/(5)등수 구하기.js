function solution(arr) {
    arr2 = arr;
    let answer = Array.from({ length: arr.length }, () => 0),
        cnt = 0,
        rank = 1;
    while (cnt < arr.length) {
        cnt += 1;
        let maxV = Math.max(...arr);
        let idx = 0;
        while (arr2.indexOf(maxV) != -1) {
            let maxIdx = arr2.indexOf(maxV);
            arr2[maxIdx] = -1;
            answer[maxIdx] = rank;
            idx += 1;
        }
        rank += idx;
    }
    return answer;
}
console.log(solution([87, 89, 92, 100, 76]));
