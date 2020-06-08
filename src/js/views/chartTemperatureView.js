import { elements } from "./base";

const chartTemeratureView = () => {
  const markup = `
    <canvas id="chart-canvas"></canvas>
  `;

  elements.mainEl.insertAdjacentHTML("beforeend", markup);
};

export default chartTemeratureView;
