function solution(board, moves) {
    var answer = 0,
        stack = [];
    let len = board.length;
    for (let i of moves) {
        let idx = i - 1;
        let picked = 0;
        for (let j = 0; j < len; j++) {
            if (board[j][idx] != 0) {
                picked = board[j][idx];
                board[j].splice(idx, 1, 0);
                break;
            }
        }
        if (picked != 0) {
            if (stack[stack.length - 1] === picked) {
                stack.pop()
                answer += 2
            } else {
                stack.push(picked)
            } 
        }
    }

    return answer;
}
let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
