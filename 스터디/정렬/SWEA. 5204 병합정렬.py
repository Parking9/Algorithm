def merge(left, right):
    global cnt
    i,j = 0,0
    sorted_list=[]
    if left[-1] > right[-1]:
        cnt+=1
    while (i<len(left)) & (j<len(right)):
        if left[i] < right[j]:
            sorted_list.append(left[i])
            i+=1
        else:
            sorted_list.append(right[j])
            j+=1
    while i<len(left):    
        sorted_list.append(left[i])
        i+=1
    while j < len(right):
        sorted_list.append(right[j])
        j+=1
    return sorted_list


def merge_sort(lst):
    if len(lst) <=1:
        return lst
    center=len(lst)//2    
    left = lst[:center]
    right = lst[center:]

    left1= merge_sort(left)
    right1= merge_sort(right)
    return merge(left1,right1)


T=int(input())
for tc in range(1,T+1):
    n=int(input())
    lst=list(map(int,input().split()))
    cnt=0
    lst=merge_sort(lst)
    print(f'#{tc} {lst[n//2]} {cnt}')