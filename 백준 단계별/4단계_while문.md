# 4단계 [while문](https://www.acmicpc.net/step/2)

##  10952번 [A+B - 5](https://www.acmicpc.net/problem/10952)


```python
while 1:
    a,b=map(int,input().split())
    if a==0 and b==0:
        break
    else:
        print('%d'%(a+b))

```



##  10951번 [A+B - 4](https://www.acmicpc.net/problem/10951)


```python
while 1:
    try:
        a,b=map(int,input().split())
        print('%d'%(a+b))
    except :
        break 
```





##  1110번 [ 더하기 사이클](https://www.acmicpc.net/problem/1110)


```python
def cycle(x):
    if ((x//10) + (x%10)) >=10:
        return (x%10)*10 + ((x//10) + (x%10))%10
    elif x <10:
        return x*11
    else:
        return (x%10)*10+(x//10) + (x%10) 
v=[]
try:
    n=int(input())
    if n <0 or n>99:
        raise Exception
    elif n<10:
        n=n*11            
except:
    exit(0)
else:
    m=n
    while n not in v:
        m=cycle(m)
        v.append(m)
    print(len(v))
```
