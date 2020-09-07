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



## 16928번. 뱀과 사다리 게임

```python
# 16928번 - 뱀과 사다리 게임
def bfs():
    # 첫 시작 1
    Q = [1]
    # 방문 표시
    v = [0]*101
    v[1] = 1
    while Q:
        # Q의 첫번째 인자
        w = Q.pop(0)
        # 주사위 범위로 갈 수 있는 점.
        for i in range(1, 7):
            # 좌표가 범위 내이고, 방문한 적이 없는
            if 1 < w+i <= 100 and v[w+i] == 0:
                # 만약 snake나 ladder의 시작점이면, 시작점과 끝점 방문표시하고, 끝점을 Q에
                if w+i in los_s:
                    if v[los_e[los_s.index(w+i)]] == 0:
                        v[w+i] = v[w]+1
                        Q.append(los_e[los_s.index(w+i)])
                        v[los_e[los_s.index(w+i)]] = v[w]+1
                # 그냥 1-6을 갈 수 있으면, Q에 넣고, 방문처리
                else:
                    # 만약 100이 나오면 return
                    if w+i != 100:
                        Q.append(w+i)
                        v[w+i] = v[w]+1
                    else:
                        return v[w]+1


L, S = map(int, input().split())
los_s = []
los_e = []
for _ in range(L):
    a, b = map(int, input().split())
    los_s.append(a)
    los_e.append(b)
for _ in range(S):
    a, b = map(int, input().split())
    los_s.append(a)
    los_e.append(b)

print(bfs()-1)
```



## 16948번. 데스나이트

```python
def bfs(s):
    Q = [s]
    v[s[0]][s[1]] = 1
    while Q:
        w = Q.pop(0)
        for i, j in [(-2, -1), (-2, 1), (0, -2), (0, 2), (2, -1), (2, 1)]:
            w1 = w[0]+i
            w2 = w[1]+j
            if 0 <= w1 < T and 0 <= w2 < T and v[w1][w2] == 0:
                Q.append((w1, w2))
                v[w1][w2] = v[w[0]][w[1]]+1
                if w1 == end[0] and w2 == end[1]:
                    return v[w1][w2]-1
    return -1


T = int(input())
arr = list(map(int, input().split()))
start = (arr[0], arr[1])
end = (arr[2], arr[3])
v = [[0]*T for _ in range(T)]
print(f'{bfs(start)}')
```



## 0919번. DSLR

```python
def dfs(s):
    Q = [[s, '']]
    while Q:
        w = Q.pop(0)
        w1 = w[0]
        w2 = w[1]
        for i in ['D', 'S', 'L', 'R']:
            if i == 'D':
                Q.append([int((2*w1) % 10000), w2+i])
            elif i == 'S':
                if w1 == 0:
                    Q.append([9999, w2+i])
                else:
                    Q.append([w1-1, w2+i])
            elif i == 'L':
                Q.append([int(w1 % 1000)*10+int(w1//1000), w2+i])
            else:
                Q.append([int(w1//10)+int(w1 % 10)*1000, w2+i])
            if Q[-1][0] == e:
                return Q[-1][1]


T = int(input())
for _ in range(T):
    s, e = map(int, input().split())
    print(f'{dfs(s)}')
```

