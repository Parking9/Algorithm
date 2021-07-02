function solution(n){
  let answer = 0;
  let curr = 0, goal = n+1;

  function factor(i){
    if(i ===  1 | i === 0){
      return 1
    }else{
      let an = 1
      for(let j = 2; j <=i; j++){
        an *= j
      }
      return an
    }
  }

  function combiNum(i,j){
    return factor(i) / (factor(j) * factor(i-j))
  }

  for(let i = 0; i <= Math.floor(goal / 2); i++){
    let numZ = goal - 2*i
    answer += combiNum(numZ + i, i)
  }
  return answer
}
console.log(solution(7))