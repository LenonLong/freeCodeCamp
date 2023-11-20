/*
Boo who:
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/
function booWho(bool) {
    return typeof bool === 'boolean'

}
   
console.log(booWho(null));   //  false
console.log(booWho(true));   //  true
console.log(booWho(false));  //  true
console.log(booWho(0));      //  false
console.log(booWho('true')); //  false

/*
This function takes in one parameter named bool.

typeof Operator:
typeof bool === 'boolean' checks if the type of the bool parameter is 'boolean'.

Return Statement:
The function returns true if the type of bool is 'boolean', indicating that the value is a boolean primitive (true or false). 
Otherwise, it returns false.

** boolean primitives consist of only two values: true and false. These are the only values that belong to the boolean primitive type.
*/
