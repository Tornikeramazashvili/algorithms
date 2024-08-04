/* If you have multiple implementations of the same function,
how would you determine which one is the best? 🤔

That's where Big O notation comes in 🚀

Big O helps us measure the efficiency of our code, and focuses 
on how the algorithm's runtime grows relative to the size of the input 📈

For example if we want to write a function that 
calculates the sum of a number 🔢
*/

// example 1: 

function addUpTo1(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total = total + i;
  }
  return total;
}

console.log(addUpTo1(5)); // output: 15

// example 2: 

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo2(5)); // output: 15

/* Outputs are the same, so which one is the best and what does BETTER mean? 🤔

Faster? ⚡
Less memory-intensive? 💪🏻   
More readable? 🔎

You might say that readability is important, well it is, but actually speed 
is much more important in terms of algorithms 🛠️

We can use performance.now() function that can measure how long takes our code to run 🏃

for example:
*/

let startingPoint = performance.now();
addUpTo1(1000000000);
let endingPoint = performance.now();
console.log(`Time elapsed: ${(endingPoint - startingPoint) / 1000} seconds`);

let startingPoint2 = performance.now();
addUpTo2(1000000000);
let endingPoint2 = performance.now();
console.log(`Time elapsed: ${(endingPoint2 - startingPoint2) / 1000} seconds`);

/* We can clearly see that addUpTo2 is much faster than addUpTo1. Why does this happen? 🤔 

addUpTo1 uses 5n + 2 operations because of the FOR LOOP (n addition, n assignment, n comparison, n addition, n assignment, 1 assignment, 1 assignment).
as the input n GROWS larger, the time required to complete the function GROWS linearly, Therefore GROWS INPUT = GROWS TIME 📈
so the time complexity will be O(n).

addUpTo2 uses 3 simple operations (multiplication, addition, division), regardless of the size of n.
as the input n GROWS LAGER, the execution time REMAINS constant, Therefore GROWS INPUT = DOES NOT GROW TIME 📉
so the time complexity is O(1).

to sum up: 

In Big O notation:
O(1) means constant time. The algorithm's speed DOESN'T change with the SIZE of the input. It's always fast.
O(n) means linear time. The algorithm's speed GROWS directly with the SIZE of the input. If the input doubles, the time it takes doubles.
O(n²) means quadratic time. The algorithm's speed GROWS with the SQUARE of the input size. If the input doubles, the time it takes increases fourfold.
*/