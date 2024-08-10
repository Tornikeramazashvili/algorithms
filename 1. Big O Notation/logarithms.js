/*
In the previous document (1. Big O Notation • Time Complexity and • Space Complexity),

We discussed how INCREASING input affects RUNTIME, in time and in space. ⏳

And In this document, there will be theories only, but don't worry — I’ll make it simpler.

Okay, but WHAT THE HELL is a Logarithm? 🤔

Well, we talked about what O(1), O(n), and O(n²) are, but there are also more complex math expressions, like logarithms. 🔢

Logarithms express HOW MANY times you need to divide or multiply a number to reach a value, for division this is 1 or less than 1.

For example:

- log₂(8) means how MANY TIMES you need to divide 8 by 2 to get 1. Here, log₂(8) = 3 because 2^3 = 8. 
- log₂(25) describes how many times you need to divide 25 by 2 to approach 1. This is approximately 4.64,
meaning it takes around 4.64 divisions by 2 to reduce 25 to 1. 🔍

Note that division cannot be only by 2; it can be 3, 4, etc. 🔄

Now let's compare how similar O(n) and O(log n) are: ⚖️

- O(n): Time complexity GROWS linearly with the SIZE of the input. 📈
- O(log n): Time complexity GROWS not linearly, but LOGARITHMICALLY with the size of the input. 📈

When we say that something increases LOGARITHMICALLY,
we are referring to the number of times you need to multiply or divide by a base number to reach or exceed a given value. 🔢

That’s why O(log n) is better than O(n), because

In O(log n), the algorithm efficiently reduces the size of the problem by dividing it,
leading to faster performance for larger datasets compared to O(n), where the time grows directly with the size of the input. 🚀

So in time complexity, O(1) is the best, O(n) is not bad, but O(log n) is better than O(n) and less than O(1). 🌟 

Note that not every problem or algorithm has a time complexity of O(log n) 😂

But if you have alogirithm with O(log n) time complexity, merry christmas !

Certain searching algorithms have logarithmic time complexity, 

some of the sorting algorithms invove logarithms,

Where You Can Use O(log n):
- Binary Search: Efficiently finding an element in a sorted array.
- Balanced Search Trees: Operations in AVL trees, Red-Black trees, etc.
- Heaps: Operations in priority queues (e.g., insertion, extraction).
- Divide-and-Conquer Algorithms: Some algorithms that halve the problem size each step.

Where O(log n) Does Not Apply:
- Linear Time Complexity O(n): Operations that require processing each element individually (e.g., finding the maximum value in an array).
- Quadratic Time Complexity O(n^2): Algorithms with nested loops (e.g., bubble sort).
- Constant Time Complexity O(1): Operations that take the same time regardless of input size (e.g., accessing an array element by index).

P.S. While O(log n) and O(n) are different time complexities and are not interchangeable,
you can indeed compare them to determine which is more efficient, like we did in this document.
*/

