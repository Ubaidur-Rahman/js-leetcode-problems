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
  const arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};
console.log(lengthOfLastWord('        fgdfgdfg fgdfgdfg     '));

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 9]));

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(arr);
  if (arr.length % 2 == 0) {
    console.log(arr[arr.length / 2 - 1]);
    if (arr[arr.length / 2 - 1] == 0 && arr[arr.length / 2] == 0) {
      return 0;
    } else {
      return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    }
  } else {
    return arr[(arr.length - 1) / 2];
  }
};

console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 4, 4]));

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

var mergeKLists = function (lists) {
  return lists.flat().sort((a, b) => a - b);
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);

console.log('2 + 2(5-6)'.split(' ').join());

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function (n) {
  let ans = 0,
    n1 = 1,
    n2 = 2;
  if (n == 1) return 1;
  if (n == 2) return 2;
  for (let i = 2; i < n; i++) {
    ans = n1 + n2;
    n1 = n2;
    n2 = ans;
  }
  return ans;
};

console.log(climbStairs(7));

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// solution by set

// var deleteDuplicates = function(head) {
//   return [...new Set(head)].sort((a,b)=>a-b)
// };

// by forEach method

// var deleteDuplicates = function(head) {
//   let arr = []
//     head.forEach((el)=>{
//     if(!arr.includes(el)){
//     arr.push(el)
//     }
// })
//   return arr.sort((a,b)=>a-b)
// };

// by filter method

var deleteDuplicates = function (head) {
  let uniqueChars = head.filter((element, index) => {
    return head.indexOf(element) === index;
  });
  return uniqueChars.sort((a, b) => a - b);
};

console.log(deleteDuplicates([1, 12, 1, 1, 2, 3]));

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function (num) {
  if (num < 10) return num;
  const sumOfIndividualDigits = (n) =>
    [...`${n}`].map(Number).reduce((acc, value) => acc + value, 0);

  let ans = sumOfIndividualDigits(num);

  if (ans < 9) {
    return ans;
  } else {
    let temp = sumOfIndividualDigits(ans);
    if (temp < 10) {
      return temp;
    } else {
      return sumOfIndividualDigits(temp);
    }
  }
};

console.log(addDigits(2147483647));




Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

