"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}',
];

let clean = [];

for (let i = 0; i < rawData.length; i++) {
  try {
    let parsed = JSON.parse(rawData[i]);
    if (!parsed.user || !parsed.age) {
      throw new Error("Missing user or age");
    }
    parsed.age = Number(parsed.age);
    if (parsed.age >= 18) {
      clean.push(parsed);
    }
  } catch (error) {
    console.log(`Error at line ${i + 1}: ${error.message}`);
  }
}

console.log("Valid data:", clean);
