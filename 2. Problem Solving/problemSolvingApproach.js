/* 
As you can see, we start a new section with a new topic, which is problem-solving. 🔍

Problem-solving is the main concept in every programming language because writing code, solving a problem, and knowing theories are different things. 🤔

It's okay if you don't know many theories and don't code every time, but if you can solve the problem, you're on fire. 🔥

And if you cannot solve the problem, but you know theories and write code every single day, you have to work harder. 💪

Because in the end, every problem needs to be solved, and going deep into theories and writing code every day are just helpers. 🛠️

So, when it comes to solving problems, there are many ways, but I would underline 3 steps:

• Understand the problem. 🤓
• Break that problem into small problems. 🧩
• Solve it and then think about refactoring. 🔄

Have you heard that "if you can write down the problem clearly, it is half solved"? 📝

That's how understanding the problem in programming works! 🧠

If you clearly understand the problem, you can clearly solve it. ✅

If you cannot understand the problem, you may write incorrect code or not be able to code at all. 🚫

Okay, but how do you do that, or from where do you start? 🤷

Let's start with the problem: "Write a function that takes in a string and returns the count of each character in the string."

So if the string is "hello," the output should be: { h: 1, e: 1, l: 2, o: 1 }. 🆗

But BEFORE YOU CODE ✋

• In your own words, repeat the problem you are going to solve and how much information you have for it. 🗣️
• In your own way, divide the problem into small pieces, because if you don't know what to do or what the result will be, just start with the pieces. 🔍
• In your way of solving, first, make the result because solving is all that matters, then refactor. 🎯

Let's start solving this problem. 🛠️

After I restate and understand the problem, I start dividing it into pieces. 🧩

If I don't know what the result will be, at least I know that I need 4 things: 👇

• A function, because the problem is to write a function. 📦
• An object, because the output is an object. 📊
• A loop, because we need to iterate over the string. 🔄
• An if/else statement for the logic, where a single character is 1, and more than 1 will be incremented. ➕

*/

// First step is to declare a function, pass the parameter, and also the argument.
function charCount(str) {
  // Second step is to declare an object that will be empty in the beginning.
  let result = {};
  // Third step is to make a loop for iterating; let's make it simpler with a for loop.
  for (let i = 0; i < str.length; i++) {
    // Fourth step is to write if/else logic to give each letter 1, and if it's more than 1, increment it and save it in the object.
    if (result[str[i]] > 0) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
}

console.log(charCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }

// Now that we've solved the problem, let's try to refactor. 📝
// I'll change the name to avoid altering the code's history:

// The function stays the same because it will be either a regular function or an arrow function—it doesn't matter for Big O notation. Use what you want.
function charCountRefactored(str) {
  // The object stays the same, just changing the variable name for more clarity; it's an object because we need to produce the desired output.
  let obj = {};
  // Instead of looping and making this code unreadable with result[str[i]], let's use a for-of loop instead of a for loop to simplify.
  for (let char of str) {
    // We'll make a variable to hold our character in the result to make it even more readable and make it lowercase to avoid confusion with the same letters.
    char = char.toLowerCase();
    // While refactoring, we can add some extra good stuff to our code, like the RegExp test method, to include characters only from 'a' to 'z'.
    if (/[a-z]/.test(char)) {
      // And the last thing: instead of the traditional if/else, which is fine, we can try a much easier way. 
      obj[char] = ++obj[char] || 1; // This means that if there is already a value, increment it, or set it to 1.
    }
  }
  return obj;
}
console.log(charCountRefactored("hello")); // { h: 1, e: 1, l: 2, o: 1 }
// As well, we have the same output in this case.
console.log(charCountRefactored("h e Llo!")); // { h: 1, e: 1, l: 2, o: 1 }

/* 
Let's sum up! 📚
  
If you have live coding or are just solving a problem on your own:
  
• Restate the problem in your own words and then start solving. 🗣️
• Write the steps and comments like we did during problem-solving. 📝
• Use console.log to see where you are and what problems might occur. 🖥️
• After you solve it, you can refactor not just for syntactic sugar, but for much more optimization. 🎯
• If you cannot solve it, that's okay. Don't use ChatGPT to solve the problem—try as many times as you need, but do it your way. 💡
• Learning algorithms helps, as does coding every day, but as we said above, problem-solving is a different kind of thing. 🧠
• Problem-solving means learning from your own mistakes, and remember what Elliot said in Mr. Robot: 💻

A bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are. 🤓  

Indeed, a bug is not just a mistake—thinking about it makes you who you are and makes you a better programmer. 🐞
  
That's how to solve the problem, and that's how to become a good problem solver.
*/
