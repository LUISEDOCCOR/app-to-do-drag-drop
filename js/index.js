const btnAdd = document.querySelector("#btn-add-toDo");
const toDoTitle = document.querySelector("#title");
const toDoDescription = document.querySelector("#description");
const itemDate  = document.querySelector('#date')

//contenedores
const taskItem = document.querySelector(".task-item");
const progressItem = document.querySelector(".progress-item");
const deletedItem = document.querySelector(".deleted-item");
const completedItem = document.querySelector(".completed-item");

import {
  pushToDo,
  rederdCards,
  key,
  removeToDo,
} from "./assets/localstorage.js";
import { drag, drop } from "./assets/dragDrop.js";
import { addBtnEdit } from "./assets/btn.js";
import { remove } from "./assets/remove.js";
import { download } from "./assets/download.js"; 
import { loadFile } from "./assets/read.js";

const PushCard = (title, description, key, state) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = key;
  card.setAttribute("draggable", "true");
  card.style.width = "18rem";
  const div = document.createElement("div");
  div.classList.add("card-body");
  var content = `
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
    `;
  var icon = `<i id="${key}" class="fa-solid fa-pen-to-square"></i>`;
  div.innerHTML = content;
  const btnEdit = document.createElement("button");
  btnEdit.id = key;
  btnEdit.classList.add("btn", "btn-info");
  btnEdit.innerHTML = icon;
  addBtnEdit(btnEdit)
  div.appendChild(btnEdit);
  card.appendChild(div);

  if (state == "progress") {
    progressItem.appendChild(card);
  } else if (state == "deleted") {
    deletedItem.appendChild(card);
  } else if (state == "completed") {
    completedItem.appendChild(card);
  } else {
    taskItem.appendChild(card);
  }
};

btnAdd.addEventListener("click", () => {
  if (toDoTitle.value != "") {
    const generatedKey = key();
    PushCard(toDoTitle.value, toDoDescription.value, generatedKey);
    pushToDo(toDoTitle.value, toDoDescription.value, generatedKey);
    drag();
    toDoTitle.value = "";
    toDoDescription.value = "";
  }
});

var date = new Date
date = date.toString()
date = date.split(" ")
itemDate.innerHTML = `${date[0]} ${date[1]} ${date[2]} ${date[3]}`


rederdCards();
drop();
drag();
remove()
download()
loadFile()
export { PushCard };
