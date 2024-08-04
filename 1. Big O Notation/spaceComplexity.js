/* In previous document (1. Big O Notation • timeComplexity.js)

We analyze how the runtime of an algorithm increases as the size of the input increases - that was TIME complexicty ⌛

There is also SPACE complexity, which means that how much additional memory do we need to allocate in order to run the code 🏃

Most primitives like:
- booleans,
- numbers,
- undefined, 
- null

Are constant space - SIZE does not matter, it takes same amout of space, it is considered as CONSTANT space 🤏

STRING is different, it requires O(n) space, where n is length of the string

Reference types like:
- arrays, 
- objects, 

are generally O(n) space as well.

For example if we want to write a sum function
*/

// example 1:

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total
}

console.log(sum([1,2,3]))

/*
In time complexity this would be 5n + 2 in other words O(n), but we don't care about TIME, we care about SPACE.

total = 0 is a number, and i = 0 is also number, as we already know numbers are primitives and requires CONSTANT space, 
so the space complexity will be O(1).

let's look about double function
*/

// example 2

function double(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i])
    }
    return newArr
}

console.log(double([1,2,3,4]))

/*
In the double function, please note not line 50, but line 52 📍, because if arr increases, pushing (storing) data in the array also increases, right? 
So the space complexity will be O(n) 📈.
*/