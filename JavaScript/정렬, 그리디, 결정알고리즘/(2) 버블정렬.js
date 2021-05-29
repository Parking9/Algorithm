function solution(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let j = i;
		while (arr[j] > arr[j + 1]) {
			[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			j += 1;
		}
	}
	return arr;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
