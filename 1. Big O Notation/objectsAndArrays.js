/*
In the previous document (1. Big O Notation • logarithms),

We discussed about how many times you need to divide or multiply a number to reach a value, that's logarithms ⏳

Now let's talk about objects and arrays and did you know that objects are very fast compared to arrays? 🚀

But what does "fast" mean? 🏃‍♂️ If you want to insert, remove, or access data, it happens in O(1) time. ⏱️
However, searching goes to O(N) time, as well as Object methods such as `keys`, `values`, and `entries`. 🔍

For example, if you use `Object.keys` and more keys are added to an object, 🗝️
that means we are visiting every key and gathering everything in a big array. 🗂️

If you want an unordered data structure with key-value pairs, an object is the best way to go. 🌟

`hasOwnProperty` is the exception because if we can access information in O(1), 🔑
we check the value in pretty much exact time. ⏳

What about arrays? 🤔 

If you want an ordered data structure, an array is a good choice. 📊
They are also fast, BUT ordering makes it slower, and searching takes more time, although accessing happens in constant time, O(1). ⏲️

You can clearly see that searching in both arrays and objects happens in O(N) time. ⌛

What about array methods? 🛠️

Let's look at some examples: */

let arr = ["Michael", "John", "Andrew"]; // If we have 1,000,000 values in this array, each item has its own index, right? 🏷️

/* If we push something, we will have 1,000,001 items, but the indexes will remain the same, right? 📈
But if we use `unshift`, in that case, every item's index will be +1, and all item indexes will change, which is O(N). 🔢

However, if we want to access an index, that happens in constant time, O(1). 🕰️

To summarize, we can say that different methods have different impacts on our runtime. For example:

- O(1) : `push`, `pop`, accessing with index
- O(N) :  `unshift`, `shift`, `concat`, `splice`, `slice`, and iterating methods such as `forEach`, `map`, `filter`, etc. 🔄
- Sorting is a different topic and will be discussed more in the next documents. 📚
*/