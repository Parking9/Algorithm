function solution(a, b) {
    let answer = [];
    // while (true) {
    //     if (a[0] <= b[0]) {
    //         answer.push(a.shift());
    //     } else {
    //         answer.push(b.shift());
    //     }
    //     if (a.length === 0 || b.length === 0) {
    //         if (a.length === 0) {
    //             return [...answer, ...b];
    //         } else {
    //             return [...answer, ...a];
    //         }
    //     }
    // }

    return Array.from(new Set([...a, ...b])).sort((a, b) => {
        return a - b;
    });
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
