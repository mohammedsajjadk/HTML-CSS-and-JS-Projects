// import Search from "./models/Search";
// import * as searchView from "./views/searchView";
// import { elements, renderLoader, clearLoader } from "./views/base";

/** Global state of the app
 */
// const state = {};

// Write the code for your controllers here!
import * as Budget from "./models/Budget";
import * as view from "./views/views";
import { elements } from "./base";

view.renderMonth();
Budget.renderBudget();

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const type = elements.addType.value;
  const description = elements.addDescription.value;
  const value = elements.addValue.value;
  if (description && value) {
    Budget.saveBudget(type, description, value);
    elements.addDescription.value = "";
    elements.addValue.value = "";
    Budget.renderBudget();
  }
});
