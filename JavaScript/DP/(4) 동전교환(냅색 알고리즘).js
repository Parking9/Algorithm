function solution(n, arr){
  let dy = Array.from({length : n+1}, () => n+2)
  dy[0] = 0
  for(let i = 0; i < arr.length; i++){
    for(let j = arr[i]; j <= n; j++){
      dy[j] = Math.min(dy[j], dy[j- arr[i]] +1)
    }
  }
  console.log(dy)
  return dy[n]
}
let arr=[1, 2, 5];
console.log(solution(15, arr));