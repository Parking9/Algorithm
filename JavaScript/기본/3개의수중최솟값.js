function solution(a, b, c) {
    if (a < b) {
        if (a < c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b < c) {
            return b;
        } else {
            return c;
        }
    }
    // return Math.min(a, b, c);
}
console.log(solution(6, 5, 11));
