let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ").length;
let isPositive =
  !feedback.toLowerCase().includes("bad") &&
  !feedback.toLowerCase().includes("poor");
if (isPositive) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
console.log(`Word count: ${words}`);
