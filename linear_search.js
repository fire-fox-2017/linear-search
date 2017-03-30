'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here

  let indeks = 0;
  for(let i = 0; i < values.length; i++){
    if(target === values[i]){
      indeks = i;
      break;
    } else {
      indeks = null;
    }
  }

  if(indeks === null){
    return -1;
  } else {
    return indeks;
  }
//cari index, yg paling pertama
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(72, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here

let indeks = [];

for(let i = 0; i < values.length; i++){
  if(target === values[i]){
    indeks.push(i);
  }
}

return indeks;


}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
