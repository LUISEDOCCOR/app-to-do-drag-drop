const aDownload = document.querySelector("#link-download")

var data = []

const getData = () =>{
    data = []
    for(var i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i)
        const protoype = 
        data.push(JSON.parse(localStorage.getItem(key)))
    }
}

const createJSON = () =>{
    var jsonData = JSON.stringify(data);
    var blob = new Blob([jsonData], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ToDoApp.apptodo';
    a.click();
}

const download = () =>{
    aDownload.addEventListener('click', (e)=>{
        e.preventDefault()
        getData()
        if(data.length > 1){
            createJSON()
        }
    })
}

export{download}