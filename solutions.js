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
  for (let num of arr){
      if (typeof num != 'number'){
          console.log("Los datos de entrada no son adecuados");
          break;
      }
      if (num>Largest){
          Largest = num;
      }
  }
  return Largest;
}
// Count Vowels in a String
function countVowels(str) {
  const vowels = ['a','e','i','o','u'];
  let numVowels = 0;
  if (typeof str != 'string'){
    console.log("Los datos de entrada no son adecuados");
    return 0;
  }
  for (const char of str){
  if (vowels.includes(char.toLowerCase())){
      numVowels++;
  }
  }
  return numVowels;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number' || n < 2) {
  console.log("Los datos de entrada no son adecuados");
  return false;
  }
  if (n === 2) return true; 
  for (let i = 2; i < n; i++) {
  if (n % i === 0) return false;
  }

  return true;
}


module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
