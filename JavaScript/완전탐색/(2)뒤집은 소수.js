function check(n) {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function solution(arr) {
    let answer = [];
    for (let i of arr) {
        let reversedN = Number(String(i).split("").reverse().join(""));
        if (check(reversedN)) {
            answer.push(reversedN);
        }
    }
    return answer;
}
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
