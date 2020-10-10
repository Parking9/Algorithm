# 2020 KAKAO BLIND RECRUITMENT

## 가사검색 _ Trie

[2020 KAKAO BLIND RECRUITMENT](https://programmers.co.kr/learn/challenges?selected_part_id=17214)

```python
import collections

class Node:
    def __init__(self):
        self.child={}
        self.remain_num={}
        self.word=False

class Trie:
    def __init__(self):
        self.root=Node()

    def insert(self, word : str) -> None:
        node=self.root
        node.remain_num[len(word)] = node.remain_num.get(len(word), 0) + 1
        while word:
            if word[0] not in node.child:
                node.child[word[0]]=Node()
            node=node.child[word[0]]
            word=word[1:]
            node.remain_num[len(word)]=node.remain_num.get(len(word),0)+1
        node.word=True


    def check(self, word : str) -> int:
        node=self.root
        rlen=word.count('?')
        while word[0] != '?':
            if word[0] not in node.child:
                return 0
            node=node.child[word[0]]
            word=word[1:]
        return node.remain_num.get(rlen,0)

def solution(words, queries):
    trie1=Trie()
    trie2=Trie()
    for i in words:
        trie1.insert(i)
        trie2.insert(i[::-1])
    ans=[]
    for j in queries:
        if j[0] =='?':
            ans.append(trie2.check(j[::-1]))
        else:
            ans.append(trie1.check(j))
    return ans

print(solution(["frodo", "front", "frost", "frozen", "frame", "kakao"],["fro??", "????o", "fr???", "fro???", "pro?"]))
```

