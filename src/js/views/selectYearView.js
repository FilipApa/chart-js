import { elements } from "./base";

const selectYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  let markup = "";
  for (let i = -10; i <= 100; i++) {
    markup += `<option value=${year + i}> ${year + i}</option>`;
  }

  elements.selectYearEl.insertAdjacentHTML("beforeend", markup);
};

export default selectYear;
