const toDoTitle = document.querySelector("#title");
const toDoDescription = document.querySelector("#description");
const btnConfirm = document.querySelector("#btn-edit-toDo")
const btnAdd = document.querySelector("#btn-add-toDo");

import { PushCard } from "../index.js";
import { pushToDo } from "./localstorage.js";

var Key 
var Data

const edit = (key) =>{
    btnConfirm.classList.remove('d-none')
    btnAdd.classList.add('d-none')
    
    const data = JSON.parse(localStorage.getItem(key))
    toDoTitle.value = data.title
    toDoDescription.value = data.description
    
    Key = key
    Data = data
}

btnConfirm.addEventListener('click', ()=>{
    PushCard(toDoTitle.value, toDoDescription.value, Key, Data.state)
    pushToDo(toDoTitle.value, toDoDescription.value, Key, Data.state)


    toDoTitle.value = ''
    toDoDescription.value = ''
    
    document.getElementById(Key).remove()
    
    btnConfirm.classList.add('d-none')
    btnAdd.classList.remove('d-none')
})


export{edit}