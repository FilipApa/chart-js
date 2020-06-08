import Chart from "chart.js";

const ChartTemperature = (dataArr) => {
  const chartCanvasEl = document
    .getElementById("chart-canvas")
    .getContext("2d");
  let data = dataArr.map((elem) => elem.stv_t);

  let labels = dataArr.map((elem) => elem.datum);
  labels = labels.map((date) => {
    date = date.split("-");
    const formatDate = `${date[2]}.${date[1]}`;
    return formatDate;
  });

  Chart.defaults.global.defaultFontSize = 16;
  new Chart(chartCanvasEl, {
    type: "horizontalBar",
    data: {
      labels,
      datasets: [
        {
          label: "Dnevne temperature vazduha u gasovodu",
          data,
          backgroundColor: "rgba(59, 153, 252, 0.7)",
        },
      ],

      options: {
        labels: {
          fontSize: 22,
        },
      },
    },
  });
};
export default ChartTemperature;
