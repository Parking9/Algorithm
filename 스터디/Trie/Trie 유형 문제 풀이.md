# Trie 유형 문제 풀이

## 백준 14425번. 문자열 집합

```python
import sys

class TrieNode:
    def __init__(self):
        self.child={}
        self.word=False

class Trie:
    def __init__(self):
        self.root=TrieNode()
    
    def insert(self,word : str) ->None :
        node=self.root
        for ch in word:
            if ch not in node.child:
                node.child[ch]=TrieNode()
            node=node.child[ch]
        node.word=True

    def search(self, word : str) -> bool :
        node=self.root
        for ch in word:
            if ch not in node.child:
                return False
            node=node.child[ch]
        if node.word:
            return True
        else:
            return False

input=sys.stdin.readline
trie=Trie()
N,M=map(int,input().strip().split())
for _ in range(N):
    trie.insert(input().strip())
cnt=0
for _ in range(M):
    if trie.search(input().strip()):
        cnt+=1
print(cnt)

```

위 문제는 트라이로 풀었지만 메모리와 실행 시간이 매우 좋지 않았다. 따라서 딕셔너리 형태의 자료 구조로 저장하여 다르게 풀어보았음.



```python
import sys
input=sys.stdin.readline
N,M=map(int,input().strip().split())
lst={input().strip() for _ in range(N)}
cnt=0
for _ in range(M):
    if input().strip() in lst:
        cnt+=1
print(cnt)
```

