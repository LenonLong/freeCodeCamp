/*
Finders Keepers :
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
function findElement(arr, func) {
   
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return arr[i];
    }
    return undefined
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // 2
  console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })) //  8.

/*
findElement function takes an array arr and a function func as arguments. 
It iterates through the array and applies the given function func to each element. 
If func returns true for an element, that element is returned immediately. 
If no elements pass the test, undefined is returned.
*/
