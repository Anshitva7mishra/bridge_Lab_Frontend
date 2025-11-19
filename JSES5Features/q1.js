"use strict";

const apiData = [
  "25",
  "true",
  "false",
  "NaN",
  " ",
  "100px",
  "3.14",
  null,
  undefined,
];

let validNumbers = [];
let invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
  let value = apiData[i];
  let num = Number(value);
  let bool = Boolean(value);
  let str = String(value);

  console.log(
    `Value: ${value} -> Number: ${num}, Boolean: ${bool}, String: ${str}`
  );

  if (isNaN(num) || value === " " || value === "100px") {
    invalidNumbers.push(value);
    console.log(`Skipped invalid: ${value}`);
  } else {
    validNumbers.push(num);
  }
}

console.log("=== DETAILED REPORT ===");
console.log("Valid Numeric Data:");
for (let num of validNumbers) {
  console.log(`  - ${num}`);
}
console.log("Invalid Data:");
for (let inv of invalidNumbers) {
  console.log(`  - ${inv}`);
}
console.log(
  `Total Valid: ${validNumbers.length}, Total Invalid: ${invalidNumbers.length}`
);
