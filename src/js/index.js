import "../css/style.css";
import { elements, removeLoader, renderLoader } from "./views/base";
import Search from "./models/Search";
import ChartTemperature from "./models/ChartTemperature";
import MiddleValue from "./models/MiddleValue";
import { getInput, clearResults } from "./views/searchView";
import chartTemeratureView from "./views/chartTemperatureView";
import selectYear from "./views/selectYearView";
import tableChartView from "./views/tableView";
import middleValueView from "./views/middleValueView";
const state = [];

const searchCtr = async () => {
  const month = getInput(elements.selectMonthEl) || currentMonth;
  const year = getInput(elements.selectYearEl) || currentYear;

  if (month && year) {
    state.tempData = new Search(month, year);
    clearResults();
    renderLoader(elements.chartSectionEl);

    try {
      await state.tempData.getData();
      removeLoader();
      chartTemeratureView();
      ChartTemperature(state.tempData.temperature);
      const midVal = MiddleValue(state.tempData.temperature);
      middleValueView(midVal);
      tableChartView(state.tempData.temperature);
    } catch (error) {
      removeLoader();
      elements.errorMsgEl.classList.add("show");
      setTimeout(() => {
        elements.errorMsgEl.classList.remove("show");
      }, 5000);
      console.error(error);
    }
  }
};

const initCtr = async () => {
  selectYear();
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  elements.selectMonthEl.value = currentMonth;
  elements.selectYearEl.value = currentYear;

  if (currentMonth && currentYear) {
    state.tempData = new Search(currentMonth, currentYear);
    clearResults();
    renderLoader(elements.chartSectionEl);
    try {
      await state.tempData.getData();
      console.log(state);
      removeLoader();
      chartTemeratureView();
      ChartTemperature(state.tempData.temperature);
      const midVal = MiddleValue(state.tempData.temperature);
      middleValueView(midVal);
      MiddleValue(state.tempData.temperature);
      tableChartView(state.tempData.temperature);
    } catch (error) {
      removeLoader();
      elements.errorMsgEl.classList.add("show");
      setTimeout(() => {
        elements.errorMsgEl.classList.remove("show");
      }, 5000);
      console.error(error);
    }
  }
};

document.addEventListener("DOMContentLoaded", initCtr);

elements.searchBtnEl.addEventListener("click", searchCtr);
