function solution(a, b) {
    let arr = a.split("");
    let arr2 = b.split("");
    let dict1 = {};
    let dict2 = {};
    for (let i = 0; i < a.length; i++) {
        if (Object.keys(dict1).indexOf(arr[i]) !== -1) {
            dict1[arr[i]] += 1;
        } else {
            dict1[arr[i]] = 1;
        }
        if (Object.keys(dict2).indexOf(arr2[i]) !== -1) {
            dict2[arr2[i]] += 1;
        } else {
            dict2[arr2[i]] = 1;
        }
    }

    for (let i of Object.keys(dict1)) {
        if (dict1[i] !== dict2[i]) {
            return "NO";
        }
    }
    return "YES";
}
let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
