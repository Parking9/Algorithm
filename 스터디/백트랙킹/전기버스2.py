T = int(input())
for tc in range(1, T + 1):
    lst = list(map(int, input().split()))
    n = lst[0]
    lst = lst[1:]
    cnt = 0
    curr = 0
    battery = lst[0]

    while curr + battery < n - 1:
        next_destination = 0
        next_idx = 0
        for i in range(1, battery + 1):
            if i + lst[curr + i] > next_destination:
                next_destination = i + lst[curr + i]
                next_idx = curr + i
        curr = next_idx
        cnt += 1
        battery = lst[curr]
    print(f'#{tc} {cnt}')