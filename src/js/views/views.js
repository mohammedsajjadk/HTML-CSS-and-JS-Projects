// import { elements } from "./base";
import moment from "moment";
import { elements, elementStrings } from "../base";

export const generateBudget = (budget) => {
  let type = budget.type === "inc" ? "income" : "expense";
  const markUp = `
        <div id="${budget.id}" class="${type}__item">
        <p class="${type}__item--description">${budget.description}</p>
        <div class="right">
        <div class="item__value${type === "expense" ? " red" : ""}">${
    type === "income" ? "+" : "-"
  } ${Math.abs(budget.amount)}</div>
        <button class="${type}__item--delete">
            <i class="ion-ios-close-outline${
              type === "expense" ? " red" : ""
            }"></i>
        </button>
        </div>
    `;
  document
    .querySelector(`.${type}__list`)
    .insertAdjacentHTML("beforeend", markUp);
};

export const getCurrentMonth = () => moment().format("MMMM YYYY"); // October 2020

export const renderMonth = () => {
  document.querySelector(".budget__title--month").innerHTML =
    getCurrentMonth() + ":";
};

export const generateHeaderBudget = (totalIncomeAmount, totalExpenseAmount) => {
  const budget = parseFloat(totalIncomeAmount - totalExpenseAmount).toFixed(2);

  elements.budgetValue.innerHTML = generateAmount(budget);

  elements.budgetIncomeAmount.innerHTML = generateAmount(totalIncomeAmount);
  elements.budgetExpenseAmount.innerHTML = generateAmount(
    -Math.abs(totalExpenseAmount)
  );

  const percentage = totalIncomeAmount / totalExpenseAmount;

  if (percentage)
    elements.budgetExpensePercentage.innerHTML = `${Math.round(percentage)}%`;
};

const generateAmount = (amount) =>
  `${Math.sign(amount) >= 0 ? "+" : "-"}&nbsp;${parseFloat(
    Math.abs(amount)
  ).toFixed(2)}`;
