const selectSingle = document.querySelector(".select");
const selectSingle_title = selectSingle.querySelector(".select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".select__label");

// Переключатель menu
selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// закрываем когда кликаем по option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}

// Выпадающий список
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  selectSingle_title.textContent =
    selectSingle_title.getAttribute("data-default");
});
