// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // (1) 단순반복문
  let answer = 0;
  let temp = [];
  // 반복하면서 새로 들어오면(홀수) +1, 기존에 있는게 들어오면 -1 (짝수)
  for (let s of S) {
    let idx = temp.indexOf(s);
    if (idx === -1) {
      answer += 1;
      temp.push(s);
    } else {
      temp.splice(idx, 1);
      answer -= 1;
    }
  }
  return answer;

  // (2) Map 활용
  // let myMap = new Map();
  // for(let i of S){
  //     if(myMap.has(i)){
  //         myMap.set(i,myMap.get(i)+1);
  //     }else{
  //         myMap.set(i,1);
  //     }
  // }
  // Map을 통해 각 문자의 개수를 구한 후
  // let answer = 0;
  // 홀수의 개수를 센다.
  // myMap.forEach((value, key) => {
  //     if(value%2 !== 0){
  //         answer +=1;
  //     }
  // })
  // return answer;
}
