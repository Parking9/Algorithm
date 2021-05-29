function solution(str) {
	let answer = 0,
		stack = [],
		pipes = [],
		point = [],
		prev = '(';
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			stack.push(i);
			prev = '(';
		} else {
			if (prev === '(') {
				point.push(i);
			}
			pipes.push([stack.pop(), i]);
			prev = ')';
		}
	}
	for (pipe of pipes) {
		let temp = point.filter((p) => {
			return (pipe[0] < p) & (p < pipe[1]);
		});
		if (temp.length !== 0) {
			answer += temp.length + 1;
		}
	}
	return answer;
}
let a = '()(((()())(())()))(())';
console.log(solution(a));
let b = '(((()(()()))(())()))(()())';
console.log(solution(b));
