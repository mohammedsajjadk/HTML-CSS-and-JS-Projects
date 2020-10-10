import uuidv4 from "uuid/v4";
import * as view from "../views/views";

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
  const index = budgetObj.findIndex((curr) => curr.id === id);
  budgetObj.splice(index, 1);
  localStorage.setItem("budget", JSON.stringify(budgetObj));
};

export const renderBudget = (forDelete = false) => {
  const filtered = filteredArray();

  if (!forDelete) {
    if (filtered.incomeArr.length > 0) {
      document.querySelector(`.income__list`).innerHTML = "";
      filtered.incomeArr.forEach(view.generateBudget);
    }

    if (filtered.expenseArr.length > 0) {
      document.querySelector(`.expense__list`).innerHTML = "";
      filtered.expenseArr.forEach(view.generateBudget);
    }
  }
  let totalIncomeAmount = calculateBudget(filtered.incomeArr);
  let totalExpenseAmount = calculateBudget(filtered.expenseArr);
  view.generateHeaderBudget(totalIncomeAmount, totalExpenseAmount);
};

const filteredArray = () => {
  const arr = loadBudget();
  const incomeArr = arr.filter((curr) => curr.type.includes("inc"));
  const expenseArr = arr.filter((curr) => curr.type.includes("dec"));

  return { incomeArr, expenseArr };
};

const calculateBudget = (arr) =>
  arr.reduce((acc, curr) => {
    return acc + parseFloat(curr.amount);
  }, 0);



  loadBudget();
