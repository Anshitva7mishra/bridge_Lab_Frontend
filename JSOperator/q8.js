const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

let total = 0;
for (let item of cart) {
  let discount = 0;
  if (item.category === "electronics") {
    discount = 0.1;
  } else if (item.category === "fashion") {
    discount = 0.05;
  }
  let discountedPrice = item.price * (1 - discount);
  total += discountedPrice;
}
if (total > 50000) {
  total *= 0.95;
}
console.log(`Final total: ${total.toFixed(2)}`);
