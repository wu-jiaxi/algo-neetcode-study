1. Two Sum - https://leetcode.com/problems/two-sum/description/

```jsx
var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complementPair = target - value;

    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }
};
```

2. Contains Duplicate - https://leetcode.com/problems/contains-duplicate/

```
var containsDuplicate = function(nums) {
    nums= nums.sort()
    for (let i = 0; i<nums.length;i++){
        if(nums[i] == nums[i+1]){
            return true
        }
    }
    return false
};
```

49. Group Anagrams - https://leetcode.com/problems/group-anagrams/

```
var groupAnagrams = function(strs) {
    let obj = {}

    for (let i of strs){
        let key = i.split('').sort().join('')

        if(!obj[key]){
            obj[key] = [i]
        } else {
            obj[key].push(i)
        }
    }
        return (Object.values(obj))
};
```

242 Anagram - https://leetcode.com/problems/valid-anagram/description/

```
var isAnagram = function(s, t) {
    let sortedS = s.split('').sort().join('')
    let sortedT = t.split('').sort().join('')

    if(sortedS === sortedT){
        return true
    } else{
        return false
    }
};
```

125 Valid Palindrome - https://leetcode.com/problems/valid-palindrome/description/

```
var isPalindrome = function(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the string is equal to its reverse
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
};
```

167 Two Sum II - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

```jsx
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
};
```

20 Valid Parenthesis - https://leetcode.com/problems/valid-parentheses/

```
var isValid = function(s) {
    const stack = []
    let parens = "() {} []"
    let i = 0

    while (i<s.length){
        stack.push(s[i])
        i++

        let open = stack[stack.length - 2]
        let closed = stack[stack.length - 1]

        let potParens = open + closed

        if(parens.includes(potParens)){
            stack.pop()
            stack.pop()
        }
    }
        return stack.length === 0
};
```

[]()

704 Binary Search https://leetcode.com/problems/binary-search/description/

https://www.youtube.com/watch?v=t3svuOuBGRI

```jsx
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
```

**121. Best Time to Buy and Sell Stock** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ - chatGPT

```jsx
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxPrice) {
      maxPrice = prices[i] - minPrice;
    }
  }
  return maxPrice;
};
```

206 Reverse linked lists https://leetcode.com/problems/reverse-linked-list/

```
var reverseList = function(head, prev=null) {
  if(!head) return prev

  next = head.next
  head.next = prev

  return reverseList(next, head)
};
```

226 Invert Binary Tree https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

https://www.youtube.com/watch?v=47yYw7NbzlU

```jsx
var invertTree = function (root) {
  if (!root) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
```

**104. Maximum Depth of a Binary Tree** https://leetcode.com/problems/maximum-depth-of-binary-tree/description/ https://www.youtube.com/watch?v=67VyhnAO8ak

```jsx
var maxDepth = function (root) {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
```

110 Balanced Binary Tree https://leetcode.com/problems/balanced-binary-tree/description/

https://www.youtube.com/watch?v=z4GBxiW6wbk

```
var isBalanced = function(root) {
    if(!root) return 1
    let left = isBalanced(root.left)
    let right = isBalanced(root.right)
    if(left === false || right === false) return false
    if (Math.abs(left-right)>1) return false
    return Math.max(left, right) +1
};
```

100 Same Tree https://www.youtube.com/watch?v=J4zQohiqhRI https://leetcode.com/problems/same-tree/description/

```jsx

```
