// Sum of Two Numbers
function sum(a, b) {
  if (typeof a == "number" && typeof b == "number"){
    return a + b;
  }
  else {
    console.log("Los datos de entrada no son adecuados");
  }
}

// Factorial of a Number
function factorial(n) {
  if (typeof n == "number"){
  if (n == 0) {
    return 1;
  }
  else{
      return n*factorial(n-1);
    }
  }
  else {
    console.log("El dato de entrada no es adecuado");
  }
}

// Find the Largest Number
function findLargest(arr) {
  let Largest = arr[0];
  for (let number in arr){
    if (typeof number != 'number'){
      console.log("Los datos de entrada no son adecuados");
      break;
    }
    if (number>Largest){
      Largest = number;
    }
    
  }
}

// Count Vowels in a String
function countVowels(str) {
  const vowels = ['a','e','i','o','u'];
  let numVowels = 0;
  for (const char in str){
    if (typeof char != 'string'){
      console.log("Los datos de entrada no son adecuados");
      break;
    }
    else if (vowels.includes(char.toLowerCase())){
        numVowels++;
    }
  }
  return numVowels;
}

// Check if a Number is Prime
function isPrime(n) {
  if(typeof n != 'number'){
    console.log("Los datos de entrada no son adecuados");
  }
  else{
    for(let i;i<n;i++){
      if (n%i==0){
        return false
      }
      return true
    }
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
