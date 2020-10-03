import { elements } from "./base";

export const renderItem = (item) => {
  const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
  elements.shoppingList.insertAdjacentHTML("beforeend", markup);
};

export const renderClearListBtn = () => {
  const markup = `
        <button class="btn-small btn-clear">
          <span>Clear Shopping List</span
          ><svg>
            <use href="img/icons.svg#icon-circle-with-cross"></use>
          </svg>
        </button>
  `;
  if (document.querySelectorAll(".shopping__item").length > 0) {
    document
      .querySelector(".shopping__list")
      .insertAdjacentHTML("afterend", markup);
  }
};

export const deleteItem = (id) => {
  const item = document.querySelector(`[data-itemid="${id}"]`);
  if (item) item.parentElement.removeChild(item);
};
