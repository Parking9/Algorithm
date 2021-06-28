// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // 공통의 프로토타입 객체 myPrototype
  let myPrototype = {
    value: function () {
      return this.inputValue;
    },
  };
  let answer = [];
  // 반복하며 해당 값을 고유 속성으로 넣고 공통의 프로토타입에는 이를 출력하는 value function이 있다.
  for (let v of A) {
    let temp = Object.create(myPrototype);
    temp.inputValue = v;
    answer.push(temp);
  }
  return answer;
}

let T = solution([4, 2]);
console.log(T);
console.log(T[0].value());
console.log(T[1].value());
console.log(T[0].value === T[1].value);
console.log(!T[0].hasOwnProperty('value'));
console.log(!T[1].hasOwnProperty('value'));
