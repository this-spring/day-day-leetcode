easy  

https://leetcode-cn.com/problems/valid-palindrome-ii/  


场景范式：  
在场景A下如果某个条件出现两条路，且只要有一个成功就算成功，那么要把判断条件抽象成函数分别去尝试这两条路  

```
  if (!find(start, end)) {
      let reStart = start;
      let reEnd = end;
      return find(reStart + 1, reEnd) || find(reStart, reEnd - 1);
  }
```