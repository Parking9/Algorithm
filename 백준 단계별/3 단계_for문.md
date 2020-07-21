# 3단계 [for문](https://www.acmicpc.net/step/3)

##  2739번 [구구단](https://www.acmicpc.net/problem/2739)

```python
N=int(input())
for i in range(1,10):
    print('%d * %d = %d'%(N,i,N*i))
```



## 10950번 [A+B - 3](https://www.acmicpc.net/problem/10950)

```python
T=int(input())
for i in range(T):
    a,b=map(int,input().split())
    print('%d'%(a+b))
```



## 8393번 [ 합](https://www.acmicpc.net/problem/8393)

```python
a=int(input())
j=0
for i in range(1,a+1):
    j=j+i
print('%d'%j)
```



## 2741번 [N 찍기](https://www.acmicpc.net/problem/2741)

```python
n=int(input())
for i in range(1,n+1):
    print('%d'%i)
```



## 11021번 [A+B - 7](https://www.acmicpc.net/problem/11021)

```python
T=int(input())
for i in range(1,T+1):
    A, B=map(int, input().split())
    print('Case #%d: %d' %(i,A+B))
```



## 11022번 [A+B - 8](https://www.acmicpc.net/problem/11022)

```python
T=int(input())
for i in range(1,T+1):
    A, B=map(int, input().split())
    print('Case #%d: %d + %d = %d' %(i,A,B,A+B))
```

##  

## 2438번 [ 별 찍기 - 1](https://www.acmicpc.net/problem/2438)

```python
n=int(input())
for i in range(1,n+1):
    print('%s'%('*'*i))
```



## 2439번 [별 찍기 - 2](https://www.acmicpc.net/problem/2439)

```python
n=int(input())
for i in range(1,n+1):
    print('%s%s'%(' '*(n-i),'*'*i))
```



## 10871번 [ X보다 작은 수](https://www.acmicpc.net/problem/10871)

```python
N,X=map(int,input().split())
a=list(map(int,input().split()))
for i in a:
    if i<X:
        print(i,end=' ')
```



