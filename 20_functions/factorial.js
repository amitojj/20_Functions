function factorial(n) {
  if (n == 0) return 1;
  const result = n * factorial(n - 1);
  return result;
}

console.log(factorial(6)); //720