import axios from "axios";

class Search {
  constructor(month, year) {
    this.month = month;
    this.year = year;
  }

  async getData() {
    try {
      const temperatureRes = await axios(
        `https://webscadans.srbijagas.com/temperature/temperature.php?godina=${this.year}&mesec=${this.month}`
      );
      this.temperature = temperatureRes.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Search;
