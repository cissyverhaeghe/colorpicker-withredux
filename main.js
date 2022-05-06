import "./style.css";
import store from "./data";
import { setColor, addColor } from "./data/color.js";
function render() {
  document.querySelector("#app").innerHTML = `<h1>Colorpicker</h1>
  `;

  document.querySelector("ul").innerHTML = store
    .getState()
    .map(
      (color) => `<li>
    <div class=colorblock style="background-color: ${color.hex}"></div>
    <p>${color.name}</p>
    <input type="color" class="picker" value="${color.hex}" data-id="${color.id}"/>
    </li>`
    )
    .join("");
}

render();

document.querySelector("ul").addEventListener("change", (e) => {
  if (e.target.classList.contains("picker")) {
    store.dispatch(
      setColor({ code: e.target.dataset.id, hex: e.target.value })
    );
  }
});

const form = document.querySelector("form");
form.onsubmit = (e) => {
  e.preventDefault();
  store.dispatch(
    addColor({
      hex: form.elements["hex"].value,
      name: form.elements["name"].value,
    })
  );
  form.elements["hex"].value = "fff";
  form.elements["name"].value = "";
};

store.subscribe(render);
