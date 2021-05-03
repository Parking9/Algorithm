## JS 메모

- Math.min(var1, var2, var3 ....)

Array의 최솟값은 전개연산자를 활용 




- Math.ceil floor round ==> 정수값을 반환

특정 소수점 자리를 표현하려면 곱셈을 활용

```javascript
Math.ceil(N * 100) / 100
```



- for ... of 는 배열을 순회
- for ... in 은 객체를 순회 (key)



- map은 배열을 순회하며 요소마다 callback 함수를 적용하여 새로운 배열 반환

```javascript
let arr = [1,2,3]
let arr2 = arr.map(n => Math.pow(n,2))
//[1, 4, 9]
```



- reduce는 배열을 순회하며 초기 값에 따라 callback 함수를 누적

```javascript
let arr= [1,2,3]
let n = arr.reduce((acc,curr)=> {return acc + curr}, 0)
console.log(n)
// 6
```



- `str.toUpperCase()` 
  - str의 대문자를 리턴함



-  `x.charCodeAt()`
  - ASCII CODE 리턴



-  `String.fromCharCode(num)` 
  - ASCII code to string



- `str.substring(startidx, endidx+1)`  
  - 시작인덱스~끝인덱스-1 까지의 문자열 리턴



- `str.substr(startidx, 갯수)` 
  - 시작인덱스에서 갯수 만큼 문자열 리턴



- Array의 특정 위치에 원소 삽입 `arr.splice(idx,0,value)`
  - idx = 원하는 인덱스



- Array의 인덱싱 (python의 arr[ to :  from]) `arr.slice(a,b)`
  - a는 시작 인덱스, b는 끝+1 인덱스 없으면 a부터 끝까지



- Array Deep Copy `JSON.parse(JSON.stringify(arr))`
  - arr.slice(0)은 shallow copy임.



- 원하는 길이 만큼의 Array 생성. `Array.from({length : n}, (value,idx)=> {})`
  - n : 길이, value : undefined, idx = 인덱스



- 문자열을 배열로 `string.split('')`
- 배열을 거꾸로 `arr.reverse()`
- 배열을 문자열로 `arr.join('')`



- 숫자형임을 판별하는 메서드 `isNaN(x)` 
  - isNotANumber로 false면 숫자형이고, true면 숫자형이 아니다 

