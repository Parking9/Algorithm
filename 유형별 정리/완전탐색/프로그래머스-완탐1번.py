# 12345
# 21232425
# 3311224455

def common(ans,rest,l,r):
    i = len(ans)
    ans2 = rest * l + rest[:r]
    cnt = 0
    for i2 in range(i):
        if ans[i2] == ans2[i2]:
            cnt +=1
    return cnt


def solution(answers):
    len_a = len(answers)
    l1 = len_a // 5
    r1 = len_a % 5

    l2 = len_a//8
    r2 = len_a % 8

    l3 = len_a//10
    r3 = len_a % 10

    a1 = common(answers, [1,2,3,4,5], l1, r1)
    a2 = common(answers, [2,1,2,3,2,4,2,5], l2, r2)
    a3 = common(answers, [3,3,1,1,2,2,4,4,5,5], l3, r3)

    ans=[a1,a2,a3]
    answer =[]
    for i in range(3):
        if ans[i] == max(ans):
            answer.append(i+1)

    return answer
