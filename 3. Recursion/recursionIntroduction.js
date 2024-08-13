/*
As you can see, we start a new section - Recursion and its introduction. 🔍

Like other algorithms, recursion is a different way to solve problems. 🚀 

There are two main approaches: iterative (non-recursive) and recursive. 🔄 

Iterative approach:
 - Uses loops like for, while, and do-while to repeat sequences. ✅ 

First Example:
*/

function iterative_way(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("Done");
}

iterative_way(5);

/*
What happens here:
 - The loop runs, counting down from the number.
 - Result: 5, 4, 3, 2, 1, Done.

But there's another way: the recursive approach.

Recursive approach:
 - The function calls itself.
 - Requires two key components:
   Base Case: When to stop the recursion.
   Recursive Case: Where the function calls itself.

Second Example:
*/

function recursive_way(num) {
  if (num <= 0) {
    console.log("Done");
    return;
  }
  console.log(num);
  num--;
  recursive_way(num);
}

recursive_way(5);

/*
What happens here:
 - The function checks if the number is 0.
 - If not, it decrements the number and calls itself.
 - This repeats until the number hits 0.
 - Result: 5, 4, 3, 2, 1, Done.

In the context of Big O Notation:

Iterative solutions:
 - Generally preferred for their simplicity and lower space complexity.
 - Particularly efficient when time complexity is the same as recursive approaches. 📉

Recursive solution:
 - Can be more intuitive for certain problems.
 - Might be less efficient in terms of space if deep recursion is involved. 📈

In summary:
 - The first function uses loops—more memory-efficient and straightforward.
 - The second function uses self-calling functions—potentially causing a stack overflow. 📝

But beyond all of these, neither approach is inherently better, so in the end everything.
depends on the specific algorithm and problem you are solving. 🤔
*/
