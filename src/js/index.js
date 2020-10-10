import * as Budget from "./models/Budget"; // loadBudget() will be executed in Budget.js while importing here
import * as view from "./views/views";
import { elements, elementStrings } from "./base";

/* Render Current Month and Budget (in header) on UI */
view.renderMonth();
Budget.renderBudget();

/* Add Item */
elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const type = elements.addType.value;
  const description = elements.addDescription.value;
  const value = elements.addValue.value;
  if (description && value) {
    // Save budget on the array
    Budget.saveBudget(type, description, value);

    // Clear the fields
    elements.addDescription.value = "";
    elements.addValue.value = "";

    // Render on UI
    Budget.renderBudget();
  }
});

/* Delete Item */
document.addEventListener("click", (e) => {
  if (e.target.matches(".ion-ios-close-outline")) {
    // remove from storage
    Budget.deleteBudget(e.target.closest("div[id]").id);

    // remove from UI
    e.target.closest("div[id]").remove();

    // update budget
    Budget.renderBudget(true);
  }
});

/* Toggle class when dropdown state change */
elements.addType.addEventListener("change", () => {
  let fields = Array.from(
    document.querySelectorAll(
      `${elementStrings.addType}, ${elementStrings.addDescription}, ${elementStrings.addValue}`
    )
  );

  fields.forEach((curr) => {
    curr.classList.toggle("red-focus");
  });
});
