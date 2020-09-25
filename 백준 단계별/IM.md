## 12813번

```python
A=input()
B=input()
v=100000
A=int(A,2)
B=int(B,2)
print(format(A&B,'b').zfill(v))
print(format(A|B,'b').zfill(v))
print(format(A^B,'b').zfill(v))

def back(A):
    ans=''
    for i in format(A,'b').zfill(v):
        if i=='1':
            ans+='0'
        else:
            ans+='1'
    return ans
print(back(A))
print(back(B))
```



# 2564번 경비원

```python
y,x=map(int,input().split())
lst=[]
cnt=0
for _ in range(int(input())):
    lst.append(list(map(int,input().split())))
a,b=map(int,input().split())
for i in lst:
    if a in [1,2]:
        if i[0] not in [3,4] :
            if a !=i[0]:
                cnt+=min(b+i[1],y-b+y-i[1])+x
            else:
                cnt+=abs(b-i[1])
        else:
            if i[0]==3:
                if a==1:
                    cnt+=i[1]+b
                else:
                    cnt+=x-i[1]+b
            else:
                if a==1:
                    cnt+=i[1]+y-b
                else:
                    cnt+=y-b+x-i[1]
    else:
        if i[0] in [3,4] :
            if a !=i[0]:
                cnt+=min(b+i[1],x-b+x-i[1])+y
            else:
                cnt+=abs(b-i[1])
        else:
            if a==4:
                cnt+=y-i[1]+b
            else:
                if i[0]==1:
                    cnt+=b+i[1]
                else:
                    cnt+=x-b+i[1]
print(cnt)
```



## 2563 색종이

```python
cnt=0
arr=[[0]*100 for _ in range(100)]
for _ in range(int(input())):
    a,b= map(int,input().split())
    for i in range(a-1,a+9):
        for j in range(b-1,b+9):
            if arr[i][j]==0:
                arr[i][j]=1
                cnt+=1
print(cnt)
```



