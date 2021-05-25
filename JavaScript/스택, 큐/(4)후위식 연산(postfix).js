function solution(str) {
    let stack = [];
    for (let s of str) {
        if (!isNaN(s)) {
            stack.push(s);
        } else {
            let v2 = stack.pop();
            let v1 = stack.pop();
            if (s === "+") {
                stack.push(Number(v1) + Number(v2));
            } else if (s === "-") {
                stack.push(Number(v1) - Number(v2));
            } else if (s === "*") {
                stack.push(Number(v1) * Number(v2));
            } else {
                stack.push(parseInt(Number(v1) / Number(v2)));
            }
        }
    }
    return stack.pop();
}
let str = "352+*9-";
console.log(solution(str));
