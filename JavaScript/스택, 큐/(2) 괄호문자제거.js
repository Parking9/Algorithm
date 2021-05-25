function solution(str) {
    let stack = [],
        answer = "";
    for (let s of str) {
        if (["(", ")"].includes(s)) {
            if (s === "(") {
                stack.push("(");
            } else {
                stack.pop();
            }
        } else {
            if (stack.length === 0) {
                answer += s;
            }
        }
    }
    return answer;
}
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
