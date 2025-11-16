let productName = " wireless headphones PRO ";
let cleaned = productName.trim().toLowerCase();
let words = cleaned.split(" ");
let capitalized = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);
let title = capitalized.join(" ");
let finalTitle = title.replace("Pro", "Pro Edition");
console.log(`Cleaned title: ${finalTitle}`);
console.log(`Length: ${finalTitle.length}`);
