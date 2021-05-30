function solution(arr) {
	for (let i = 1; i < arr.length; i++) {
		let i2 = i;
		for (let j = i - 1; j > -1; j--) {
			if (arr[i2] < arr[j]) {
				[arr[i2], arr[j]] = [arr[j], arr[i2]];
				i2 -= 1;
			} else {
				break;
			}
		}
	}
	return arr;
}
let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
