// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// function factorial(n) {
//   //base case
//   if (n == 0 || n == 1) {
//     return 1;
//     //recursive
//   } else {
//     // console.log(n * factorial(n - 1));
//     return n * factorial(n - 1);
//   }
// }
// let ans = [];

// ans.push(factorial(numRows));

// return(ans);

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// solution

var generate = function (numRows) {
  let ans = [];
  function nCr(N, r) {
    let res = 0;
    if (r == 0) {
      return 1;
    } else {
      res = (nCr(N, r - 1) * (N - r + 1)) / r;
      // console.log(res)
    }
    return res;
  }
  for (let i = 0; i < numRows - 1; ++i) {
    ans.push(nCr(numRows - 1, i));
  }
  ans.push(1);
  return ans;
};

console.log(generate(6));

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    return nums.sort((a, b) => a - b).indexOf(target);
  }
};

console.log(searchInsert([3, 5, 7, 9, 10, 11, 31, 232, 5], 8));

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function (s) {
  if (s[0] === '(' && s[1] === ')') {
    return true;
  }
};
console.log(isValid('()'));

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

var mergeTwoLists = function (list1, list2) {
  return [...list1, ...list2].sort((a, b) => a - b);
};

console.log(mergeTwoLists([5], [0]));
