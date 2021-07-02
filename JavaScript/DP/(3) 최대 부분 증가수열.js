function solution(arr){
  // let n = arr.length
  // let answer = [];
  // for(let i of arr){
  //   let lan = answer.length
  //   if(lan === 0){
  //     answer.push(i)
  //   }else if(lan === 1){
  //     if(i < answer[0]){
  //       answer = [i]
  //     }else if(answer[0] < i){
  //       answer.push(i)
  //     }
  //   }else{
  //     if( i < answer[answer.length -1]){
  //       if(i> answer[answer.length-2]){
  //         answer.splice(answer.length-1,1,i)
  //       }
  //     }else if( i > answer[answer.length -1]){
  //       answer.push(i)
  //     }
  //   }
  // }
  // return answer.length
  let dy = Array.from({length : arr.length}, ()=> 0)
  dy[0] = 1
  for(let i =1 ; i< arr.length; i++){
    let max = 0
    for(let j = 0; j < i; j++){
      if(arr[i] > arr[j]){
        max = Math.max(max,dy[j])
      }
    }
    dy[i] = max +1
  }
  return Math.max(...dy)
}
let arr=[5, 3, 7, 8, 6, 2, 9, 4];
let arr2=[2,7,5,8,6,4,7,12,3];
console.log(solution(arr));
console.log(solution(arr2));