function solution(n, k) {
    let arr = Array.from({ length: n }, (value, idx) => idx + 1);
    while (arr.length > 1) {
        let cnt = 1;
        while (cnt < k) {
            arr.push(arr.shift());
            cnt += 1;
        }
        arr.shift();
    }
    return arr[0];
}
console.log(solution(8, 3));
