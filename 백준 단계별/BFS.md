# BFS

## 제로

```python
# 제로
K = int(input())
stack = []
for _ in range(K):
    n = int(input())
    if n == 0:
        stack.pop()
    else:
        stack.append(n)
print(sum(stack))
```



## 괄호

```python
# 괄호
def check(word):
    for i in word:
        if i == '(':
            stack.append(a)
        else:
            if stack == []:
                return 'NO'
            else:
                stack.pop()
    if stack == []:
        return 'YES'
    else:
        return 'NO'


T = int(input())
for _ in range(T):
    a = input()
    stack = []
    print(check(a))
```

