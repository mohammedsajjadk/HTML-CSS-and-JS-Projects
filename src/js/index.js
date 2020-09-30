import Search from "./models/Search";
import * as searchView from "./views/searchView";

const state = {};

const controlSearch = async () => {
  // 1) Get Results from View
  const query = searchView.getInput();

  if (query) {
    // 2) New Search Object & add to state
    state.search = new Search(query);

    // 3) Prepare UI for results

    // 4) Search for recipes
    await state.search.getResults();

    // 5) Render results on UI
    console.log(state.search.result);
  }
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
