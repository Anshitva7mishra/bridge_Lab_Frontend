let currentSalary = 50000;
let incrementRate = 5;
let salaries = [];
for (let year = 1; year <= 5; year++) {
  salaries.push({ Year: year, Salary: Math.round(currentSalary) });
  currentSalary += currentSalary * (incrementRate / 100);
}
console.table(salaries);
