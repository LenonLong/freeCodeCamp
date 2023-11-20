/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
    // Get the substring from the end of 'str' with a length equal to the length of 'target'
   let subStr = str.substring(str.length - target.length);
   
   // Check if the extracted substring matches the target
     return subStr === target;
  }
  
  console.log(confirmEnding("Bastian", "n")); // true
  console.log(confirmEnding("OpenAI", "AI")); // true
  console.log(confirmEnding("Congratulation", "on")) // true
  console.log(confirmEnding("Open sesame", "same")) // true

  console.log(confirmEnding("Hello, World", "hello")) // false
