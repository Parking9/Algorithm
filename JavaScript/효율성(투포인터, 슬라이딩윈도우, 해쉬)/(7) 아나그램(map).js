function solution(a, b) {
    let map1 = new Map(),
        map2 = new Map();
    for (let i of a) {
        if (map1.has(i)) {
            map1.set(i, map1.get(i) + 1);
        } else {
            map1.set(i, 1);
        }
    }
    for (let i of b) {
        if (!map1.has(i) || map1.get(i) == 0) {
            return "NO";
        } else {
            map2.set(i, map1.get(i) - 1);
        }
    }
    return "YES";
}
let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
