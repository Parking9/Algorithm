function solution(a, b, c) {
    let maxL = Math.max(a, b, c);
    let sumV = a + b + c;
    if (maxL > sumV - maxL) {
        return "NO";
    } else {
        return "YES";
    }
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
