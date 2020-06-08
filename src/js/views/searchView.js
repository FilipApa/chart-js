import { elements } from "./base";

export const getInput = (elem) => {
  return elem.value;
};

export const clearResults = () => {
  const canvas = document.querySelector("canvas");
  const chartjsMonitor = document.querySelector(".chartjs-size-monitor");
  if (chartjsMonitor) {
    elements.mainEl.removeChild(chartjsMonitor);
  }

  elements.mainEl.removeChild(canvas);
};
