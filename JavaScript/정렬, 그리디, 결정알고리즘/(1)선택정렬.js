function solution(arr) {
	// arr.sort((a, b) => a - b);
	// return arr;
	for (let i = 0; i < arr.length - 1; i++) {
		let minv = Math.min(...arr.slice(i + 1));
		// let idxv = arr[i];
		if (arr[i] > minv) {
			let minIdx = arr.indexOf(minv);
			[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
			// arr.splice(i, 1, arr[minIdx]);
			// arr.splice(minIdx, 1, idxv);
		}
	}
	return arr;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
