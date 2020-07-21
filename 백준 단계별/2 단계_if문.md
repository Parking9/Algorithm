# 2 단계 _[if문](https://www.acmicpc.net/step/4)

## 1330번 [두 수 비교하기](https://www.acmicpc.net/problem/1330)

```python
A,B = map(int,input().split())
if A>B :
    print('>')
elif A ==B:
    print('==')
else:
    print('<')

```


##  9498번 [시험 성적](https://www.acmicpc.net/problem/9498)

```python
score=int(input())
if score <=100 and score>=90:
    print('A')
elif score >=80 and score<=89:
    print('B')
elif score >=70 and score<=79:
    print('C')
elif score >=60 and score<=69:
    print('D')
else : print('F')
```


##  2753번 [윤년](https://www.acmicpc.net/problem/2753)

```python
Y=int(input())
if (Y%4==0 and Y%100 !=0) or Y%400==0:
    print(1)
else:
    print(0)
```


## 14681번 [사분면 고르기](https://www.acmicpc.net/problem/14681)

```python
x=int(input())
y=int(input())
if x>0:
    if y>0:
        print(1)
    elif y<0:
        print(4)
elif x<0:
    if y>0:
        print(2)
    elif y<0:
        print(3)
```


##  2884번 [알람 시계](https://www.acmicpc.net/problem/2884)

```python
a,b=map(int,input().split())
if b >=45:
    print('%d %d'%(a,b-45))
else:
    if a==0:
        print('23 %d'%(b+15) )
    else:
        print('%d %d'%(a-1,b+15))
```

