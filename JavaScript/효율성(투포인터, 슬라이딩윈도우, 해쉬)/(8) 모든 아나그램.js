// function check(a, b) {
//     let arr = a.split("");
//     let arr2 = b.split("");
//     let dict1 = {};
//     let dict2 = {};
//     for (let i = 0; i < a.length; i++) {
//         if (Object.keys(dict1).indexOf(arr[i]) !== -1) {
//             dict1[arr[i]] += 1;
//         } else {
//             dict1[arr[i]] = 1;
//         }
//         if (Object.keys(dict2).indexOf(arr2[i]) !== -1) {
//             dict2[arr2[i]] += 1;
//         } else {
//             dict2[arr2[i]] = 1;
//         }
//     }

//     for (let i of Object.keys(dict1)) {
//         if (dict1[i] !== dict2[i]) {
//             return "NO";
//         }
//     }
//     return "YES";
// }

// function solution(a, b) {
//     let answer = [];
//     for (let i = 0; i < a.length - b.length + 1; i++) {
//         let str = "";
//         for (let j = i; j < i + b.length; j++) {
//             str += a[j];
//         }
//         if (check(str, b) == "YES") {
//             answer.push(str);
//         }
//     }
//     console.log(answer);
//     return answer.length;
// }

// let a = "bacaAacba";
// let b = "abc";
// console.log(solution(a, b));

function solution(a, b) {
    const answer = [];
    const l1 = a.length;
    const l2 = b.length;
    const myMap = new Map();
    for (let b2 of b) {
        if (myMap.has(b2)) {
            myMap.set(b2, myMap.get(b2) + 1);
        } else {
            myMap.set(b2, 1);
        }
    }
    for (let i = 0; i < l1 - l2 + 1; i++) {
        let newStr = a.substring(i, i + l2);
        let m = new Map();
        for (let s of newStr) {
            if (m.has(s)) {
                m.set(s, m.get(s) + 1);
            } else {
                m.set(s, 1);
            }
        }
        let stopped = false;
        for (let j of myMap.keys()) {
            if (!m.has(j)) {
                stopped = true;
                break;
            } else {
                if (m.get(j) === 0) {
                    stopped = true;
                    break;
                } else {
                    m.set(j, m.get(j) - 1);
                }
            }
        }
        if (!stopped) {
            answer.push(newStr);
        }
    }
    return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
