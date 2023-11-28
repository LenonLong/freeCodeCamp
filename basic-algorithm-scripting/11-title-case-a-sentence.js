/*
Title Case a Sentence:
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
function titleCase(str) {
 let words = str.toLowerCase().split(' ');

 return words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
}

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout.
