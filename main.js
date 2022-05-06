import "./style.css";
import store from "./data";
import { setColor } from "./data/color.js";
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

document.querySelector("input").oninput = function (e) {
  store.dispatch(setColor({ code: e.target.dataset.id, hex: e.target.value }));
  console.log("ik wordt uitgevoerd" + e.target.dataset.id);
};

// document.querySelector("ul").onclick = (e) => {
//   if (e.target.classList.contains("picker")) {
//     store.dispatch(
//       setColor({ code: e.target.dataset.id, hex: e.target.value })
//     );
//   }
// };

store.subscribe(render);
