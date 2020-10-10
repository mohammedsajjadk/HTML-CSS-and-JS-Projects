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

/* Delete Item */
document.addEventListener("click", (e) => {
  if (e.target.matches(".ion-ios-close-outline")) {
    // remove from storage
    Budget.deleteBudget(document.querySelector("div[id]").id);

    // remove from UI
    e.target.closest("div[id]").remove();

    // update budget
    Budget.renderBudget(true);
  }
});
