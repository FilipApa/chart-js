import Chart from "chart.js";
import { formatDate } from "../views/base";

const ChartTemperature = (dataArr) => {
  const chartCanvasEl = document
    .getElementById("chart-canvas")
    .getContext("2d");
  let data = dataArr.map((elem) => elem.stv_t);

  let labels = dataArr.map((elem) => elem.datum);
  labels = labels.map((date) => formatDate(date));

  Chart.defaults.global.defaultFontSize = 16;
  Chart.defaults.global.defaultFontStyle = "bold";
  new Chart(chartCanvasEl, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Dnevne temperature vazduha u gasovodu (C)",
          data,
          backgroundColor: "rgba(59, 153, 252, 0.7)",
        },
      ],
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 200,
                    max: -100,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Temperatura (C)'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString:'Datum'
                }
            }]
        },
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        responsive: false,
        onHover: null,
        tooltips: {
          enabled: true,
        }
      }
    },
  });
};
export default ChartTemperature;
