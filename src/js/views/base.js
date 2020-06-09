export const elements = {
  containerEl: document.getElementById("container"),
  selectMonthEl: document.getElementById("select-month"),
  selectYearEl: document.getElementById("select-year"),
  searchBtnEl: document.getElementById("search-btn"),
  chartSectionEl: document.getElementById("chart-section"),
  chartTableEl: document.getElementById("chart-table-section"),
  errorMsgEl: document.getElementById("error-msg"),
  infoValueEl: document.getElementById("info-value"),
};

export const renderLoader = (parent) => {
  const markup = `
  <div class="loader"></div>
  `;

  parent.insertAdjacentHTML("beforeend", markup);
};

export const removeLoader = () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.parentElement.removeChild(loader);
  }
};

export const formatDate = (date) => {
  date = date.split("-");
  const formatDate = `${date[2]}.${date[1]}`;
  return formatDate;
};
