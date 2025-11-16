let marks = [85, 90, 78, 92, 88];
let totalMarks = 0;
let failed = false;
for (let mark of marks) {
  totalMarks += mark;
  if (mark < 35) {
    failed = true;
  }
}
let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;
if (failed) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
