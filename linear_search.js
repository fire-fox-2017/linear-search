'use strict'


let linearSearch = (num,arr) =>{
	let nilai=0;
	for(let i=0;i<arr.length;i++){
		if(arr[i]===num){
			return i;
		}
	}
	return -1

}


let random_arr2= [6,29,18,2,72,19,18,10,37];

console.log(linearSearch (18,random_arr2));
console.log(linearSearch (9,random_arr2));
console.log(linearSearch (72,random_arr2));


let banana_arr = "banana".split("");

let globalLinearSearch = (char,arr) =>{
	let tempChar = [];
	for(let i=0;i<=arr.length;i++){
		if(char===arr[i]){
			tempChar.push(i);
		}
	}
return tempChar;
}

console.log(globalLinearSearch('a',banana_arr));
module.exports = {
  linearSearch,
  globalLinearSearch
}
