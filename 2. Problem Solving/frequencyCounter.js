/*
Frequency counter is a pattern that counts how frequently a value appears. Simple. 🔢

It helps to track how often a value appears in a collection. All you need is initialization, iteration, and result. 🔄

In this case, we used an object, constructing it using a loop, and then using a second loop—not nesting, because that would be O(N^2). 🚀

For example, if you want to make an anagram, you can use a frequency counter to count values and compare them. 🧩

This was my way of doing an anagram before refactoring:
*/

function anagram1(str1, str2) {
  // First, I check if the lengths are not the same. If so, return false.
  if (str1.length !== str2.length) {
    return false;
  }

  // Saving different values to different objects.
  let anagram1 = {};
  let anagram2 = {};

  for (let letter of str1) {
    // If a value is an anagram, the output will be a: 3, n:1, g: 1, m:1.
    // Therefore, if a value exist, increment, otherwise set to 1.
    anagram1[letter] = (anagram1[letter] || 0) + 1;
  }

  for (let letter of str2) {
    // The same logic applies here.
    anagram2[letter] = (anagram2[letter] || 0) + 1;
  }

  // After all, I compare if they are not equal, if so, return false.
  for (let letter in anagram1) {
    if (anagram1[letter] !== anagram2[letter]) {
      return false;
    }
  }
  return true;
}

console.log(anagram1("", "")); // true
console.log(anagram1("aaz", "zza")); // false
console.log(anagram1("anagram", "nagaram")); // true

// This is refactored one, but not mine 😂

function anagram2(str1, str2) {
  // If lengths are not the same, return false immediately.
  if (str1.length !== str2.length) return false;

  // Create an object to store frequency counts of characters.
  let frequencyCounter = {};

  // Populate the frequency counter with characters from the first string.
  for (let letter of str1) {
    frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
  }

  // Compare the second string against the frequency counter.
  for (let letter of str2) {
    // If the letter isn't in the frequency counter or its count is zero, return false.
    if (!frequencyCounter[letter]) {
      return false;
    } else {
      frequencyCounter[letter] -= 1;
    }
  }

  return true;
}

console.log(anagram2("", "")); // true
console.log(anagram2("aaz", "zza")); // false
console.log(anagram2("anagram", "nagaram")); // true
