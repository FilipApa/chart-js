import { elements } from "./base";

export const getInput = (elem) => {
  return elem.value;
};

export const clearResults = () => {
  const canvas = document.querySelector("canvas");
  const table = document.querySelector(".chart-table");
  const chartjsMonitor = document.querySelector(".chartjs-size-monitor");
  if (chartjsMonitor) {
    elements.chartSectionEl.removeChild(chartjsMonitor);
  }

  if (table) {
    elements.chartTableEl.removeChild(table);
  }

  elements.chartSectionEl.removeChild(canvas);
};
