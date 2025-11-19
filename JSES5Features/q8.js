"use strict";


function demo(a, b) {
  let total = 10;
  // delete total; // Illegal in strict
  console.log(a, b, total);
}
demo(5, 10);
