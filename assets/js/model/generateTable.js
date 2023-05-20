const generateTable = function (data, columns) {
  const table = document.createElement("table");
  table.classList.add("table", "table-hover");

  const thead = document.createElement("thead");
  thead.classList.add("bg-primary", "text-light");

  const tr = document.createElement("tr");
  columns.forEach(column => {
    const th = document.createElement("th");
    th.innerText = column.title;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

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

export default generateTable;
