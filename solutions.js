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
  // Add your code here
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n == "number"){
    let prime = false;
    if(n%2!==0){
      prime = true;
    }
    return prime
  }
  else{
    console.log("El dato de entrada no es adecuado");
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
