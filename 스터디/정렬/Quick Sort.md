# Quick Sort

![](img/img1.png)

```python

def qsort(lst):
    if len(lst) <=1:
        return lst
    pivot = lst[len(lst)//2]
    left=[]
    equalst=[]
    right=[]
    for i in lst:
        if i < pivot:
            left.append(i)
        elif i == pivot:
            equalst.append(i)
        else:
            right.append(i)
    return qsort(left)+equalst+qsort(right)

num= list(map(int,input().split()))
print(qsort(num))
```

