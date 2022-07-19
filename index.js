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

// console.log(generate(6));

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

// console.log(searchInsert([3, 5, 7, 9, 10, 11, 31, 232, 5], 8));

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function (s) {
  if (s[0] === '(' && s[1] === ')') {
    return true;
  }
};
// console.log(isValid('()'));

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// var mergeTwoLists = function (list1, list2) {
//   return [...list1, ...list2].sort((a, b) => a - b);
// };

var mergeTwoLists = function (list1, list2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;
  while (current < list1.length + list2.length) {
    let unmerged1 = list1[index1];
    let unmerged2 = list2[index2];
    if (unmerged1 < unmerged2) {
      merged[current] = unmerged1;
      index1++;
    } else {
      merged[current] = unmerged2;
      index2++;
    }
    current++;
  }

  return merged;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function (s) {
  const arr = s.trim().split(' ')
  return arr[arr.length - 1].length;
};
console.log(lengthOfLastWord('        fgdfgdfg fgdfgdfg     '));


