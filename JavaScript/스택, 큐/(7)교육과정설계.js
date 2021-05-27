function solution(a, b) {
    let arr = a.split("");
    for (str of b) {
        if (arr.includes(str)) {
            if (arr[0] != str) {
                return "NO";
            } else {
                arr.shift();
            }
        }
    }
    return "YES";
}
let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
