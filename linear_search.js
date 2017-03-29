'use strict'


let linearSearch = (num,arr) =>{
	let jumlah=0;
	for(let i=0;i<arr.length;i++){
		if(arr[i]===num){
			jumlah ++;
		}

	}

	if(jumlah==0){
	return -1
	}else{
	return jumlah;
	}
	
}

let random_arr = [5,4,2,6,4,3,7,4,2,];

console.log(linearSearch (1,random_arr));


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
