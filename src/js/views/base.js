export const elements = {
  containerEl: document.getElementById("container"),
  selectMonthEl: document.getElementById("select-month"),
  selectYearEl: document.getElementById("select-year"),
  searchBtnEl: document.getElementById("search-btn"),
  mainEl: document.getElementById("main"),
  errorMsgEl: document.getElementById("error-msg"),
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
    setTimeout(() => {
      loader.parentElement.removeChild(loader);
    }, 800);
  }
};
