def permut(n,depth,idx,value):
    global maxV
    if value > maxV:
        return
    if n == depth:
        value += abs(home_x-customer[2*idx[(n-1)]]) + abs(home_y - customer[2*idx[(n-1)]+1])
        if value <=maxV:
            maxV=value
        return
    else:
        for i in range(n,depth):
            idx[n], idx[i] = idx[i], idx[n]
            if n==0:
                value2=abs(cp_x-customer[2*idx[n]]) + abs(cp_y - customer[2*idx[n]+1])
                if value2<maxV:
                    permut(n + 1, depth, idx, value2)
            else:
                value2=value+abs(customer[2*idx[n]]-customer[2*idx[n-1]]) + abs(customer[2*idx[n]+1]-customer[2*idx[n-1]+1])
                if value2<maxV:
                    permut(n + 1, depth, idx, value2)
            idx[n], idx[i] = idx[i], idx[n]

T=int(input())
for tc in range(1,T+1):
    N=int(input())
    lst=list(map(int,input().split()))
    cp_x , cp_y = lst[0],lst[1]
    home_x, home_y = lst[2],lst[3]
    customer = lst[4:]
    idx = list(range(N))
    maxV=999999
    permut(0, N, idx, 0)
    print(f'#{tc} {maxV}')