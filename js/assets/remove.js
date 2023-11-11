const removebtn = document.getElementsByClassName('btnRemove')
import { removeToDo } from "./localstorage.js"

var elements = []
 
const remove = () =>{
    for(var btn of removebtn){
        btn.addEventListener('click', (e)=>{
            const id = e.target.id
            const element = id.split('-')
            const container = document.querySelector(`.${element[1]}-item`)
            for(var item of container.children){
                const id = item.id   
                elements.push(document.getElementById(id))
                removeToDo(id)
            }
            for(var elementToRemove of elements){
                elementToRemove.remove()
            }
        })
    }
    
    
}

export { remove } 