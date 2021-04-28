function victory(n, m) {
    if (n === 1) {
        if (m === 1) {
            return "D";
        } else if (m === 2) {
            return "B";
        } else {
            return "A";
        }
    } else if (n === 2) {
        if (m === 1) {
            return "A";
        } else if (m === 2) {
            return "D";
        } else {
            return "B";
        }
    } else {
        if (m === 1) {
            return "B";
        } else if (m === 2) {
            return "A";
        } else {
            return "D";
        }
    }
}

function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        answer.push(victory(arr1[i], arr2[i]));
    }
    return answer;
}
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
