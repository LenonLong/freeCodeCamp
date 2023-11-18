/*
Reverse a String
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/

const reverseString = str => {return str.split('').reverse().join('')}


console.log(reverseString("hello")); // => olleh
