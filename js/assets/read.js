const btn = document.querySelector("#btnLoad");
const formFile = document.querySelector("#formFile");

import { key } from "./localstorage.js";

const loadFile = () => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const file = formFile.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          var content = e.target.result;
          content = JSON.parse(content);
          for (var toDo of content) {
            localStorage.setItem(key(), JSON.stringify(toDo));
          }
          location.reload();
        } catch (error) {
          console.log(error);
        }
      };

      reader.readAsText(file);
    }
  });
};

export { loadFile };
