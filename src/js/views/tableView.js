import { elements, formatDate } from "./base";

const tableChartView = (data) => {
  const table = document.createElement("table");
  table.className = "chart-table";
  const tableBody = document.createElement("tbody");
  const tableRow = `
    <tr class="chart-table-row">
      <td class="chart-table-data">Datum</td>
      <td class="chart-table-data">Temperatura &#8451</td>
  </tr>
  `;
  table.insertAdjacentHTML("beforeend", tableRow);
  table.appendChild(tableBody);
  tableBody.innerHTML = `
        ${data
          .map(
            (info) =>
              `
            <tr class="chart-table-row">
                <td class="chart-table-data">${formatDate(info.datum)}</td>
                <td class="chart-table-data">${info.stv_t}</td>
            </tr>
        `
          )
          .join("")}
    `;

  elements.chartTableEl.insertAdjacentElement("beforeend", table);
};

export default tableChartView;
