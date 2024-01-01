/*
Implement the filter Method on a Prototype:

You might learn a lot about the filter method if you implement your own version of it. 
It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
*/
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((item, index, array) => {
      if (callback(item, index, array)) {
        newArray.push(item);
      }
    })
    // Only change code above this line
    return newArray;
  };
  
  // console.log([23, 65, 98, 5, 13].myFilter(item => item % 2))
   // => [23, 65, 5, 13]

  console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index))
  // =>  [1, 2, 5]


  