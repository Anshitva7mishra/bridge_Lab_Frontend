"use strict";



let rows = 5; 
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}

// With var
// for (var i = 1; i <= rows; i++) {
//     var line = "";
//     for (var j = 1; j <= i; j++) {
//         line += "* ";
//     }
//     console.log(line);
// }
