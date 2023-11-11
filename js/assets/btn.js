//cuando carge mi pagina voy a agregar los eventos
import { edit } from "./edit.js";

const addBtnEdit = (element) => {
    element.addEventListener('click', (e)=>{
        edit(e.target.id)
    })
};

export {addBtnEdit}