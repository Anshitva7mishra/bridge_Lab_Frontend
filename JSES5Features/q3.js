"use strict";



const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

let valid = [];
let invalid = [];

for (let trans of transactions) {
  try {
    if (trans === null) {
      throw new Error("Null entry");
    }
    if (!trans.id || !trans.amount) {
      throw new Error("Missing id or amount");
    }
    if (trans.amount < 0) {
      throw new Error("Negative amount");
    }
    valid.push(trans);
  } catch (error) {
    invalid.push({ transaction: trans, error: error.message });
  }
}

console.log("Valid Transactions:");
for (let v of valid) {
  console.log(`  ID: ${v.id}, Amount: ${v.amount}`);
}
console.log("Invalid Transactions:");
for (let inv of invalid) {
  console.log(
    `  Transaction: ${JSON.stringify(inv.transaction)}, Error: ${inv.error}`
  );
}
console.log(`Successful: ${valid.length}, Failed: ${invalid.length}`);
