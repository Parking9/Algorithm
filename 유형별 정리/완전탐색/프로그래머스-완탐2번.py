import itertools

def istrue(num):
    if num <2 :
        return 0
    if num == 2:
        return 1
    i = 2
    while i != num:
        if num % i != 0:
            i+=1
        else:
            return 0
    return 1

def solution(numbers):
    answer = []
    len_n = len(numbers)

    for i in range(1,len_n+1):
        temp = list(itertools.permutations(numbers,i))
        for t in temp:
            ans = ''
            for t2 in list(t):
                ans += t2
            if istrue(int(ans)):
                answer.append(int(ans))
    return len(set(answer))
