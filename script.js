let arr = [];
let total = [];
let sum = 0;

//create an array of numbers up to 1000
for (let i = 0; i < 1000; i++){
    arr.push(i);
  }

//find numbers from 0 to 1000 that are multiple of 3 or 5
for (let a = 0; a < arr.length; a++){

  let num = arr[a];
  if(num % 3 == 0 || num % 5 == 0){
    total.push(num);
  }

}

//calculate total sum of multiples
for (let z = 0; z < total.length; z++){
  sum = sum + total[z];
}

console.log(sum);

//  for (let i = 0; i <= 10; i++){
//    if(i % 3 == 0 || i % 5 == 0){
//      arr.push(i);
//    }
