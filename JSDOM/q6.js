const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search students...";
document.body.appendChild(searchInput);

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const headerRow = document.createElement("tr");
thead.appendChild(headerRow);

["Name", "Branch", "CGPA"].forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const students = [
  { name: "Alice", branch: "CSE", cgpa: 8.5 },
  { name: "Bob", branch: "ECE", cgpa: 7.2 },
  { name: "Charlie", branch: "ME", cgpa: 9.0 },
  { name: "David", branch: "CSE", cgpa: 6.8 },
  { name: "Eve", branch: "ECE", cgpa: 8.1 },
];

students.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${student.name}</td><td>${student.branch}</td><td>${student.cgpa}</td>`;
  tbody.appendChild(row);
});

const noResults = document.createElement("div");
noResults.textContent = "No results found";
noResults.style.display = "none";
document.body.appendChild(noResults);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const rows = tbody.querySelectorAll("tr");
  let visibleCount = 0;
  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    if (text.includes(query)) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });
  noResults.style.display = visibleCount === 0 ? "block" : "none";
});
