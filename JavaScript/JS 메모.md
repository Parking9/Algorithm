## JS 메모

- Math.min(var1, var2, var3 ....)

Array의 최솟값은 전개연산자를 활용 

```javascript
Math.min(...arr)
```



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

