def permut(n, depth, value):
    global minV
    if value >= minV:
        return
    if n == depth:
        if value <= minV:
            minV = value
        return
    else:
        for i in range(n, depth):
            lst[i], lst[n] = lst[n], lst[i]
            permut(n + 1, depth, value + arr[n][lst[n]])
            lst[i], lst[n] = lst[n], lst[i]


T = int(input())
for tc in range(1, T + 1):
    n = int(input())
    arr = [list(map(int, input().split())) for _ in range(n)]
    minV = 0
    for i in range(n):
        minV += arr[i][i]
    lst = list(range(n))
    permut(0, n, 0)

    print(f'#{tc} {minV}')