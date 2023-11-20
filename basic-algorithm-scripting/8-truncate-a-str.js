/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
    let arr = [...str]; 

    if (str.length > num) {

        let extract = arr.splice(0, num);
        return extract.join('') + '...';
    }
        return str;
  }
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)) 
//A-tisket a-tasket A green and yellow basket.

/* 
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  }
  return str;
}
*/
