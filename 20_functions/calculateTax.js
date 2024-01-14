function calculateTax(income) {
  function tax(slab, rate, fix) {
    return (income - slab) * rate + fix; // income can be accessed by tax function . this is an example of closure.
  }

  let result;

  if (income < 300000) {
    result = 0;
  } else if (income <= 600000) {
    result = tax(300000, 0.05, 0);
  } else if (income <= 900000) {
    result = tax(600000, 0.1, 15000);
  } else if (income <= 1200000) {
    result = tax(900000, 0.15, 45000);
  } else if (income <= 1500000) {
    result = tax(1200000, 0.2, 90000);
  } else {
    result = tax(1500000, 0.3, 150000);
  }

  return result;
}

console.log(calculateTax(250000));
console.log(calculateTax(500000));
console.log(calculateTax(800000));
console.log(calculateTax(1100000));
console.log(calculateTax(1300000));
console.log(calculateTax(1600000));

// function calculateTax(income) {
//   function tax(slab, rate, fix) {
//     return (income - slab) * rate + fix;
//   }

//   if (income < 300000) {
//     return 0;
//   } else if (income <= 600000) {
//     return tax(300000, 0.05, 0);
//   } else if (income <= 900000) {
//     return tax(600000, 0.1, 15000);
//   } else if (income <= 1200000) {
//     return tax(900000, 0.15, 45000);
//   } else if (income <= 1500000) {
//     return tax(1200000, 0.2, 90000);
//   } else {
//     return tax(1500000, 0.3, 150000);
//   }
// }

// // Test the function with various incomes
// console.log(calculateTax(250000));
// console.log(calculateTax(500000));
// console.log(calculateTax(800000));
// console.log(calculateTax(1100000));
// console.log(calculateTax(1300000));
// console.log(calculateTax(1600000));
