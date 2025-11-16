let expenses = [200, 150, 800, 300, 100];
let total = 0;
for (let exp of expenses) {
  total += exp;
}
let average = total / expenses.length;
let tax = total * 0.1;
let finalAmount = total + tax;
console.log(`Total: ${total.toFixed(2)}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Final after tax: ${finalAmount.toFixed(2)}`);
