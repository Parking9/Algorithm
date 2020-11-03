def solution(n, times):
    right= n*min(times)
    left=1
    while left <= right:
        num=0
        ans=0
        mid=(left+right)//2
        for i in times:
            num+=mid//i
        if n <= num:
            right=mid-1
        else:
            left=mid+1
    return left