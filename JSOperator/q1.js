let bonus = 5000;

function calculateSalary(isPermanent) {
  let salary = 40000;
  let total = salary;
  if (isPermanent) {
    total += bonus;
  }
  console.log(`Total salary: ${total}`);
}

calculateSalary(true);
calculateSalary(false);
