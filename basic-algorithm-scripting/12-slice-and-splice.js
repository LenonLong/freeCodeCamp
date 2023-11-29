/*
Slice and Splice:

You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
   const copyArr2 = arr2.slice();

   for (let i = 0; i < arr1.length; i++){
    copyArr2.splice(n+i, 0, arr1[i]);
   }
   return copyArr2
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // => [4, 1, 2, 3, 5, 6]
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1)) // => [4, 1, 2, 3, 5]

  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)) 
  // => ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
