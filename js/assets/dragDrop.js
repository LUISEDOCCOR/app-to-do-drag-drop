const containers = document.getElementsByClassName("container-item");
const cards = document.getElementsByClassName("card");
var cardID;

import { modifyState } from "./localstorage.js";

const drop = () => {
  for (var container of containers) {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    container.addEventListener("drop", (e) => {
      try {
        const card = document.getElementById(cardID);
        const id = e.target.id;
        const Container = document.querySelector(`#${id} div`);
        card.setAttribute("state", id); //id => state CardID => key
        modifyState(cardID, id);
        Container.appendChild(card);
      } catch (error) {
        return
      }
    });
  }
};

const drag = () => {
  for (var card of cards) {
    card.addEventListener("dragstart", (e) => {
      cardID = e.target.id;
    });
  }
};

export { drop, drag };
