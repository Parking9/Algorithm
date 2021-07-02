function solution(n){
  // let answer = 0;
  // function factor(i){
  //   if(i ===  1 | i === 0){
  //     return 1
  //   }else{
  //     let an = 1
  //     for(let j = 2; j <=i; j++){
  //       an *= j
  //     }
  //     return an
  //   }
  // }

  // function combiNum(i,j){
  //   return factor(i) / (factor(j) * factor(i-j))
  // }
  
  // for(let i = 0; i <= Math.floor(n / 2); i++){
  //   let numZ = n - 2*i
  //   answer += combiNum(numZ + i, i)
  // }
  // return answer

  let dy = Array.from({length : n+1}, () => 0)
  dy[1] = 1
  dy[2] = 2
  for(let i = 3; i <=7; i++){
    dy[i] = dy[i-2] + dy[i-1]
  }
  return dy[7]
}
console.log(solution(7))