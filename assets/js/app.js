import generateTable from "./model/generateTable.js";
import data from "../data/dummy.js";
// import data from "../data/dummy.json";

const columns = [
  { title: "ID", field: "id" },
  { title: "Nama", field: "nama" },
  { title: "Kelas", field: "kelas" },
];

const tableContainer = document.getElementById("table-container");
const table = generateTable(data, columns);
tableContainer.appendChild(table);
