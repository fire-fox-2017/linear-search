'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  let index = -1;
  for (let i = 0 ; i < values.length ; i++ ) {
    // console.log(values[i]);
    if (values[i] == target){
      index = i;
      break;
    }
  }
  return index;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  let index = [];
  for (let i = 0 ; i < values.length ; i++ ) {
    // console.log(values[i]);
    if (values[i] == target){
      index.push(i);
    }
  }
  return index;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

console.log(globalLinearSearch("z", banana_arr));


module.exports = {
  linearSearch,
  globalLinearSearch
}
