import { PushCard } from "../index.js";

const key = () => {
  return Date.now()
};

const pushToDo = (title, description, key, state) => {
  const prototype = {
    title: title,
    description: description,
    state: state,
  };
  localStorage.setItem(key, JSON.stringify(prototype));
};

const rederdCards = () => {
  for (var i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const Todo = JSON.parse(localStorage.getItem(key));
    PushCard(Todo.title, Todo.description, key, Todo.state);
  }
};

const modifyState = (key, state) => {
  const data = JSON.parse(localStorage.getItem(key));
  data.state = state;
  localStorage.setItem(key, JSON.stringify(data));
};

const removeToDo = (key) =>{
    localStorage.removeItem(key)
}

export { pushToDo, rederdCards, key, modifyState, removeToDo };
