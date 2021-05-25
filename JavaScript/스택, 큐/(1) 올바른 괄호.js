function solution(str) {
    let stack = [];
    for (let s of str) {
        if (stack.length === 0) {
            if (s === ")") {
                return false;
            } else {
                stack.push("(");
            }
        } else {
            if (s === ")") {
                stack.pop();
            } else {
                stack.push("(");
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

let a = "(()(()))(()";
// let a = "(()())";
console.log(solution(a));
