const generateTable = function (data, columns) {
  // Buat elemen tabel
  const table = document.createElement("table");

  // Styling bootstrap ke table
  table.classList.add("table", "table-hover");

  // Buat header dari tabel
  const thead = document.createElement("thead");
  thead.classList.add("bg-primary", "text-light");

  //   membuat row table
  const tr = document.createElement("tr");

  // generate data ke table
  columns.forEach(column => {
    const th = document.createElement("th");
    th.innerText = column.title;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  // Buat body dari tabel
  const tbody = document.createElement("tbody");
  data.forEach(rowData => {
    const tr = document.createElement("tr");
    tr.classList.add("table-bordered", "border-dark");

    columns.forEach(column => {
      const td = document.createElement("td");
      td.classList.add("table-striped-column", "table-bordered", "border-dark");
      td.innerText = rowData[column.field];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table;
};
const data = [
  { id: 1, nama: "Muhammad Asyam Baiquni Adhika", kelas: "10A" },
  { id: 2, nama: "Fahira Najla Adhika", kelas: "10B" },
  { id: 3, nama: "Aisya Tera Adhika", kelas: "11A" },
  { id: 4, nama: "Nafila Ihyani Adhika", kelas: "10A" },
];

const columns = [
  { title: "ID", field: "id" },
  { title: "Nama", field: "nama" },
  { title: "Kelas", field: "kelas" },
];

const table = generateTable(data, columns);
document.body.appendChild(table);
