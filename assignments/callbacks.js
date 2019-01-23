// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
   return cb(arr[arr.length -1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
   return cb(sum);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product =  x*y;
  return cb(product);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
 
  // for (let i = 0; i < list.length; i++) {
  //   const element = list[i];
  //   if(item === element){
  //     cb(true)
  //   } else {
  //     cb(false)
  //   }
  // }

  list.forEach(element => {item === element ? cb(true) : cb(false)});
}

let caller = call => { call };

console.log(getLength(items, caller));
console.log(last(items, caller));
console.log(sumNums(12,12,caller));
console.log(multiplyNums(12,12,caller));
console.log(contains('Notebook', items, caller))


/* STRETCH PROBLEM */

const names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl","Adam"];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = [];
 
  // for (let i = 0; i < array.length; i++) {
  //   for(let j = array.length; j >= 0; j--){
  //     if(array[i] != array[j]){
  //     newArr.push(array[i])
  //     }
  //   }  
  // }

  newArr = names.filter(()=>{});

  return cb(newArr);
}

console.log(removeDuplicates(names, caller))