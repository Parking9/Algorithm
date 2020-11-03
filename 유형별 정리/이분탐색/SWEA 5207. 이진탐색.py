def bsearch(lst, n, i, j, ans):
    c = (i + j) // 2
    if i > j:
        return False
    if n < lst[c]:
        j2 = c - 1
        if len(ans) == 0:
            ans.append(-1)
        else:
            if ans[-1] == -1:
                return False
            ans.append(-1)
        return bsearch(lst, n, i, j2, ans)
    elif n == lst[c]:
        return True
    else:
        i2 = c + 1
        if len(ans) == 0:
            ans.append(1)
        else:
            if ans[-1] == 1:
                return False
            ans.append(1)
        return bsearch(lst, n, i2, j, ans)


T = int(input())
for tc in range(1, T + 1):
    N, M = map(int, input().split())
    lst = sorted(list(map(int, input().split())))
    num = list(map(int, input().split()))
    cnt = 0
    ans = []
    for n in num:
        if bsearch(lst, n, 0, len(lst) - 1, []):
            cnt += 1
    print(f'#{tc} {cnt}')