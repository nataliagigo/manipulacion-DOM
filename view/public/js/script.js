/* Selectores 
getElement
    getElementById -> Selecciona elemento por un id
    getElementsByClassName -> Selecciona elementos por clase
    getElementsByTagName -> Selecciona elemento por nombre de etiqueta
    
querySelector
    querySelector -> Permite seleccionar por id, por clase y por etiqueta
    querySelectorAll -> Permite seleccionar por id, por clase y por etiqueta
*/

// console.log(document.getElementById("usuario")) /* Solo muestra un elemento */
// console.log(document.getElementsByClassName("form")) /* Siempre muestra un arreglo */
// console.log(document.getElementsByTagName("form")) /* Siempre muestra un arreglo */

// console.log(document.querySelector("form"))
// console.log(document.querySelectorAll("form"))

import { buscarUsuario } from "../../../controller/ControllerUsuarios.js";
import {
  listarRecetasNoVegetarianas,
  listarRecetasVegetarianas,
  filtrarPorNombre,
  filtrarPorTipo,
  filtrarPorDificultad,
} from "../../../controller/ControllerRecetas.js";

let btnIniciar = document.querySelector("#btnIniciar");
if (btnIniciar) {
  btnIniciar.addEventListener("click", iniciarSesion);
  function iniciarSesion() {
    if (buscarUsuario()) {
      window.location.href = "/view/pages/home.html"; //redireccionar
    } else {
      console.log("Error de credenciales");
    }
  }
}

let vegetarianas = document.querySelector("#vegetarianas");
if (vegetarianas) {
  vegetarianas.addEventListener("click", () => {
    //document.getElementById("contenido").textContent = "Recetas Vegetarianas";
    listarRecetasVegetarianas();
  });
}

let noVegetarianas = document.querySelector("#no-vegetarianas");
if (noVegetarianas) {
  noVegetarianas.addEventListener("click", () => {
    //document.getElementById("contenido").textContent = "Recetas No Vegetarianas";
    listarRecetasNoVegetarianas();
  });
}

let cerrarSesion = document.querySelector("#cerrar-sesion");
if (cerrarSesion) {
  cerrarSesion.addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}

// let btnFiltrar = document.getElementById("btnFiltrar");
// if (btnFiltrar) {
//   btnFiltrar.addEventListener("click", () => {

//   });
// }

let inputs = document.querySelectorAll("form input");
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    switch (e.target.name) {
      case "nombre":
        filtrarPorNombre(e.target.value)
        break;
      case "dificultad":
        filtrarPorDificultad(e.target.value)
        break;

      case "tipo":
        filtrarPorTipo(e.target.value)
        break;
    }
  });
});
