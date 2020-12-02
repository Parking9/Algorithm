# SWEA A대비

## 상호의 배틀필드

```python
def check(x, y, H, W):
    if 0 <= x < H and 0 <= y < W:
        return True
    else:
        return False


T = int(input())
for tc in range(1, T + 1):
    H, W = map(int, input().split())
    arr = [[i for i in input()] for _ in range(H)]
    N = int(input())
    order = input()
    direc = ['^', '>', 'v', '<']

    for i in range(H):
        for i2 in range(W):
            if arr[i][i2] in direc:
                x, y, d = i, i2, arr[i][i2]

    str_going = ['U', 'R', 'D', 'L']
    dir_going = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    for idx in range(N):
        if order[idx] in str_going:
            id = str_going.index(order[idx])
            d = direc[id]
            nx, ny = x + dir_going[id][0], y + dir_going[id][1]
            if check(nx, ny, H, W) and arr[nx][ny] == '.':
                arr[x][y] = '.'
                x, y = nx, ny
                arr[x][y] = d
            else:
                arr[x][y] = d
        else:
            n = 1
            way = dir_going[direc.index(d)]
            while 1:
                if check(x + way[0] * n, y + way[1] * n, H, W):
                    if arr[x + way[0] * n][y + way[1] * n] == '#':
                        break
                    else:
                        if arr[x + way[0] * n][y + way[1] * n] != '*':
                            n += 1
                        else:
                            arr[x + way[0] * n][y + way[1] * n] = '.'
                            break
                else:
                    break

    arr = [''.join(i) for i in arr]
    print(f'#{tc} {arr[0]}')
    print(*arr[1:], sep='\n')
```



## 파핑파핑 지뢰

```python
def check(x,y,N):
    if 0<=x<N and 0<=y<N:
        return True
    else:
        False

direc = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]

def trans(x,y,arr,N):
    n=0
    for d in direc:
        if check(x+d[0],y+d[1],N):
            if arr[x+d[0]][y+d[1]]=='*':
                n+=1
    return n


T=int(input())
for tc in range(1,T+1):
    N=int(input())
    arr=[[ i for i in input()] for _ in range(N)]
    n=0
    for i in range(N):
        for j in range(N):
            if arr[i][j] == '.':
                Q=[[i,j]]
                while Q !=[]:
                    w=Q.pop(0)
                    if trans(w[0],w[1],arr,N)==0:
                        arr[w[0]][w[1]]=trans(w[0],w[1],arr,N)
                        for d in direc:
                            if check(w[0]+d[0],w[1]+d[1],N) and arr[w[0]+d[0]][w[1]+d[1]]=='.':
                                x=trans(w[0]+d[0],w[1]+d[1],arr,N)
                                if x==0:
                                    Q.append([w[0]+d[0],w[1]+d[1]])
                                    arr[w[0]+d[0]][w[1]+d[1]]=x
                                else:
                                    arr[w[0]+d[0]][w[1]+d[1]]=x
                    else:
                        arr[w[0]][w[1]]=trans(w[0],w[1],arr,N)
                        for d in direc:
                            if check(w[0]+d[0],w[1]+d[1],N) and arr[w[0]+d[0]][w[1]+d[1]]=='.':
                                x=trans(w[0]+d[0],w[1]+d[1],arr,N)
                                if x==0:
                                    Q.append([w[0]+d[0],w[1]+d[1]])
                n+=1
    print(f'#{tc} {n}')
```

