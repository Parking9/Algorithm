# Trie와 brute-force 비교

## LeetCode 336번

[링크](https://leetcode.com/problems/palindrome-pairs/)



- 브루트포스 _ **시간 초과**

```python
import itertools
class Solution:
    def palindromePairs(self, words):
        def check(a,b):
            n=0
            a=a+b
            while n!=len(a):
                if a[n] != a[-n-1]:
                    return False
                else:
                    n+=1
            return True
        ans=[]
        for v in itertools.permutations(words,2):
            if check(v[0],v[1]):
                ans.append([words.index(v[0]),words.index(v[1])])
        return ans
s1=Solution()
s1.palindromePairs(["abcd","dcba","lls","s","sssll"])
```



- Trie

```python
class TrieNode:
    def __init__(self):
        self.word_index=-1
        self.word_palindrome=[]
        self.child={}

class Trie:
    def __init__(self):
        self.root=TrieNode()

    @staticmethod
    def is_palindrome(word):
        if word==word[::-1]:
            return True

    def insert(self, index : int ,word : str) -> None:
        node=self.root
        for i, ch in enumerate(reversed(word)):
            if self.is_palindrome(word[0:len(word)-i]):
                node.word_palindrome.append(index)
            if ch not in node.child:
                node.child[ch]=TrieNode()
            node=node.child[ch]
        node.word_index=index
    
    def search(self,idx :int, word : str) ->bool :
        result=[]
        node=self.root
        while word:
            if node.word_index != -1:
                if self.is_palindrome(word):
                    result.append([idx,node.word_index])
            if word[0] not in node.child:
                return result

            node=node.child[word[0]]
            word=word[1:]
        if node.word_index not in [-1,idx]:
            result.append([idx,node.word_index])
        for i in node.word_palindrome:
            result.append([idx,i])
        return result

class Solution(object):
    def palindromePairs(self, words):
        trie=Trie()
        for i, word in enumerate(words):
            trie.insert(i,word)
        results=[]
        for i2, word2 in enumerate(words):
            results.extend(trie.search(i2,word2))
        
        return results
```

