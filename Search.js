import axios from "axios";

export class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    const req = await axios(
      `https://forkify-api.herokuapp.com/api/search?&=${this.query}`
    );
    this.result = req.data.recipes;
  }
}
