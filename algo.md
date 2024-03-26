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
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (
    (p !== null && q === null) ||
    (p === null && q !== null) ||
    p.val !== q.val
  )
    return false;
  return isSameTree(p.left, q.left) && isSameTree(q.right, p.right);
};
```

235 Lowest Common Ancestor of a Binary Tree https://www.youtube.com/watch?v=fehixeGZY9k

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

```jsx
var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
```

102 Binary Tree Level Order Traversal https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/1208680110/ https://www.youtube.com/watch?v=oI42cbNqzwA

```jsx
var levelOrder = function (root) {
  if (root === null) return [];
  let res = [];
  let queue = [root];

  while (queue.length) {
    let levelArray = [];
    let levelSize = queue.length;

    while (levelSize) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      levelArray.push(current.val);
      levelSize--;
    }
    res.push(levelArray);
  }
  return res;
};
```

199 https://leetcode.com/problems/binary-tree-right-side-view/description/ https://www.youtube.com/watch?v=Uub7EVnp0P8

```jsx
var rightSideView = function (root) {
  if (root === null) return [];

  let res = [];
  let queue = [root];

  while (queue.length) {
    let levelArray = [];
    let levelSize = queue.length;

    while (levelSize) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      levelArray.push(current.val);
      levelSize--;
    }
    res.push(levelArray[levelArray.length - 1]);
  }
  return res;
};
```

[1448. Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/ https://www.youtube.com/watch?v=UwhjCzvBB8Y

```jsx
var goodNodes = function (root) {
  let count = 0;
  let max = root.val;

  function dfs(root, max) {
    if (root === null) return;

    if (root.val >= max) {
      max = Math.max(max, root.val);
      count++;
    }

    dfs(root.left, max);
    dfs(root.right, max);
  }
  dfs(root, max);
  return count;
};
```

98 Validate binary search tree https://leetcode.com/problems/validate-binary-search-tree/description/ https://www.youtube.com/watch?v=i1m-rywzw68

```jsx
var isValidBST = function (root) {
  function recurse(root, min, max) {
    if (root === null) return true;

    if (root.val >= max || root.val <= min) {
      return false;
    }

    return (
      recurse(root.left, min, root.val) && recurse(root.right, root.val, max)
    );
  }
  return recurse(root, -Infinity, Infinity);
};
```

230 Kth Smallest Element in a BST https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/ https://www.youtube.com/watch?v=za9OrjpbaCs

```jsx
var kthSmallest = function (root, k) {
  let arr = [];
  inOrder(root, arr);
  return findKth(arr, k);
};

function inOrder(root, arr) {
  if (!root) return;
  inOrder(root.left, arr);
  arr.push(root.val);
  inOrder(root.right, arr);
}

function findKth(arr, k) {
  for (i = 0; i <= arr.length; i++) {
    if (i === k - 1) {
      return arr[i];
    }
  }
}
```

[105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

https://www.youtube.com/watch?v=Zr2NDgOPsTE

```jsx
var buildTree = function (preorder, inorder) {
  function recurse(pStart, pEnd, inStart, inEnd) {
    if (pStart > pEnd || inStart > inEnd) return null;

    let rootVal = preorder[pStart];
    let inIndex = inorder.indexOf(rootVal);
    let nLeft = inIndex - inStart;

    let root = new TreeNode(rootVal);

    root.left = recurse(pStart + 1, pStart + nLeft, inStart, inEnd - 1);
    root.right = recurse(pStart + 1 + nLeft, pEnd, inIndex + 1, inEnd);

    return root;
  }
  return recurse(0, preorder.length - 1, 0, inorder.length - 1);
};
```

124 Binary Tree Maximum Path Sum https://leetcode.com/problems/binary-tree-maximum-path-sum/description/ https://www.youtube.com/watch?v=EK0A__Ri2Ms

```jsx
var maxPathSum = function (root) {
  let max = -Infinity;

  function dfs(root) {
    if (!root) return 0;

    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right));
    let curMax = left + root.val + right;

    max = Math.max(curMax, max);
    return root.val + Math.max(left, right);
  }
  dfs(root);
  return max;
};
```

543 Diameter Of Binary Tree https://www.youtube.com/watch?v=Q2M9GYs_kuM https://leetcode.com/problems/diameter-of-binary-tree/

```jsx
var diameterOfBinaryTree = function (root) {
  maxD = 0;

  function dfs(node) {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    let currD = right + left;

    maxD = Math.max(currD, maxD);

    return Math.max(left + 1, right + 1);
  }

  dfs(root);
};
```
