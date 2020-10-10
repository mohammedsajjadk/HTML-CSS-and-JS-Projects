import uuidv4 from "uuid/v4";
import * as view from "../views/views";
import { elements } from "../base";

let budgetObj = [];
// const budgetObj = [{ id: "", type: "", description: "", amount }];

export const loadBudget = () => {
  const item = localStorage.getItem("budget");
  if (item) {
    budgetObj = JSON.parse(localStorage.getItem("budget"));
  } else {
    budgetObj = [];
  }
  return budgetObj;
};

export const saveBudget = (type, description, amount) => {
  budgetObj.push({
    id: uuidv4(),
    type,
    description,
    amount,
  });
  localStorage.setItem("budget", JSON.stringify(budgetObj));
};

export const deleteBudget = (id) => {
  let budgetArr = loadBudget();
  const index = budgetArr.findIndex((curr) => curr.id === id);
  budgetArr.splice(index, 1);
};

export const renderBudget = () => {
  const filteredIncomeArr = budgetObj.filter((curr) =>
    curr.type.includes("inc")
  );
  const filteredExpenseArr = budgetObj.filter((curr) =>
    curr.type.includes("dec")
  );

  if (filteredIncomeArr.length > 0) {
    document.querySelector(`.income__list`).innerHTML = "";
    filteredIncomeArr.forEach(view.generateBudget);
  }

  if (filteredExpenseArr.length > 0) {
    document.querySelector(`.expense__list`).innerHTML = "";
    filteredExpenseArr.forEach(view.generateBudget);
  }
  let totalIncomeAmount = calculateBudget(filteredIncomeArr);
  let totalExpenseAmount = calculateBudget(filteredExpenseArr);
  view.generateHeaderBudget(totalIncomeAmount, totalExpenseAmount);
};

const calculateBudget = (arr) =>
  arr.reduce((acc, curr) => {
    return acc + parseFloat(curr.amount);
  }, 0);

loadBudget();
