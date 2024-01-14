/**Write a JavaScript function called curry that takes a function as an argument and returns a curried
version of that function. The curried function should accept arguments one at a time and return a new
function until all arguments are provided. Then, it should execute the original function with all arguments.
Test the curry function with a function that adds two numbers. */

//easy approach if number of arguments is 2
function curry1(fn) {
  return function (arg1) {
    return function (arg2) {
      return fn(arg1, arg2);
    };
  };
}

//hard approach if number of arguments is unknown
function curry2(fn) {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args2) => curried(...args, ...args2);
    }
  };
  return curried;
}

const add = (a, b) => a + b;

const curriedAdd1 = curry1(add);

console.log(curriedAdd1(2)(3));

const curriedAdd2 = curry2(add);

console.log(curriedAdd2(2)(3));
