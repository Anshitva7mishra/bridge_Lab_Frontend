let totalPurchase = 7500;
let discountPercent = 0;
if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
}
let discountAmount = (totalPurchase * discountPercent) / 100;
let finalPrice = totalPurchase - discountAmount;
console.log(`Original total: ${totalPurchase}`);
console.log(`Discount percentage: ${discountPercent}%`);
console.log(`Final price: ${Math.round(finalPrice)}`);
