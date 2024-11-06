import {
  recetasVegetarianas,
  recetasNoVegetarianas,
} from "../model/modelRecetas.js";

export function listarRecetasVegetarianas() {
  document.getElementById("contenido").innerHTML = "";
  recetasVegetarianas.map((recetaVegetariana) => {
    let contenedor = document.createElement("div");
    let nombre = document.createElement("p");
    let ingredientes = document.createElement("ul");
    let tiempo = document.createElement("p");
    let dificultad = document.createElement("p");
    let tipo = document.createElement("p");
    nombre.textContent = "Nombre: " + recetaVegetariana.nombre;
    ingredientes.textContent =
      "Ingredientes :" + recetaVegetariana.ingredientes;
    tiempo.textContent =
      "Tiempo preparacion: " + recetaVegetariana.tiempoPreparacion;
    dificultad.textContent = "Dificultad: " + recetaVegetariana.dificultad;
    tipo.textContent = "Tipo:" + recetaVegetariana.tipoComida;
    contenedor.append(nombre, ingredientes, tiempo, dificultad, tipo);
    document.getElementById("contenido").append(contenedor);
  });
}

export function listarRecetasNoVegetarianas() {
  document.getElementById("contenido").innerHTML = "";
  recetasNoVegetarianas.map((recetaNoVegetariana) => {
    let contenedor = document.createElement("div");
    let nombre = document.createElement("p");
    let ingredientes = document.createElement("ul");
    let tiempo = document.createElement("p");
    let dificultad = document.createElement("p");
    let tipo = document.createElement("p");
    nombre.textContent = "Nombre: " + recetaNoVegetariana.nombre;
    ingredientes.textContent =
      "Ingredientes :" + recetaNoVegetariana.ingredientes;
    tiempo.textContent =
      "Tiempo preparacion: " + recetaNoVegetariana.tiempoPreparacion;
    dificultad.textContent = "Dificultad: " + recetaNoVegetariana.dificultad;
    tipo.textContent = "Tipo:" + recetaNoVegetariana.tipoComida;
    contenedor.append(nombre, ingredientes, tiempo, dificultad, tipo);
    document.getElementById("contenido").append(contenedor);
  });
}

export function filtrarPorNombre(value) {
  let recetas = recetasVegetarianas.filter(
    (recetaVegetariana) => recetaVegetariana.nombre == value
  );
  console.log(recetas);
  crearRecetasPorNombre(recetas);


   let recetasNo = recetasNoVegetarianas.filter(
     (recetaNoVegetariana) => recetaNoVegetariana.nombre == value
   );
   
   
   crearRecetasNoVegetarianas(recetasNo)
}

function crearRecetasPorNombre(recetasNo) {
  console.log(recetasNo);
  
  document.getElementById("contenido").innerHTML = "";
  recetasNo.map((recetaVegetariana) => {
    let contenedor = document.createElement("div");
    let nombre = document.createElement("p");
    let ingredientes = document.createElement("ul");
    let tiempo = document.createElement("p");
    let dificultad = document.createElement("p");
    let tipo = document.createElement("p");
    nombre.textContent = "Nombre: " + recetaVegetariana.nombre;
    ingredientes.textContent =
      "Ingredientes :" + recetaVegetariana.ingredientes;
    tiempo.textContent =
      "Tiempo preparacion: " + recetaVegetariana.tiempoPreparacion;
    dificultad.textContent = "Dificultad: " + recetaVegetariana.dificultad;
    tipo.textContent = "Tipo:" + recetaVegetariana.tipoComida;
    contenedor.append(nombre, ingredientes, tiempo, dificultad, tipo);
    document.getElementById("contenido").append(contenedor);
  });
}

function crearRecetasNoVegetarianas(recetasNo){
    document.getElementById("contenido").innerHTML = "";
  recetasNo.map((recetaNoVegetariana) => {
    let contenedor = document.createElement("div");
    let nombre = document.createElement("p");
    let ingredientes = document.createElement("ul");
    let tiempo = document.createElement("p");
    let dificultad = document.createElement("p");
    let tipo = document.createElement("p");
    nombre.textContent = "Nombre: " + recetaNoVegetariana.nombre;
    ingredientes.textContent =
      "Ingredientes :" + recetaNoVegetariana.ingredientes;
    tiempo.textContent =
      "Tiempo preparacion: " + recetaNoVegetariana.tiempoPreparacion;
    dificultad.textContent = "Dificultad: " + recetaNoVegetariana.dificultad;
    tipo.textContent = "Tipo:" + recetaNoVegetariana.tipoComida;
    contenedor.append(nombre, ingredientes, tiempo, dificultad, tipo);
    document.getElementById("contenido").append(contenedor);
  });
}


export function filtrarPorTipo(value) {
   let recetas = recetasVegetarianas.filter(
     (recetaVegetariana) => recetaVegetariana.tipoComida == value
   );
   crearRecetasPorTipo(recetas)
  // console.log(recetas);
   let recetasNo = recetasNoVegetarianas.filter(
     (recetaNoVegetariana) => recetaNoVegetariana.tipoComida == value
   );
   crearRecetasPorTipoNovegetarianas(recetasNo)
  // console.log(recetasNo);
}

function crearRecetasPorTipo(recetas){
  document.getElementById("contenido").innerHTML = "";
  recetas.map((recetaVegetariana) => {
    let contenedor = document.createElement("div");
    let nombre = document.createElement("p");
    let ingredientes = document.createElement("ul");
    let tiempo = document.createElement("p");
    let dificultad = document.createElement("p");
    let tipo = document.createElement("p");
    nombre.textContent = "Nombre: " + recetaVegetariana.nombre;
    ingredientes.textContent =
      "Ingredientes :" + recetaVegetariana.ingredientes;
    tiempo.textContent =
      "Tiempo preparacion: " + recetaVegetariana.tiempoPreparacion;
    dificultad.textContent = "Dificultad: " + recetaVegetariana.dificultad;
    tipo.textContent = "Tipo:" + recetaVegetariana.tipoComida;
    contenedor.append(nombre, ingredientes, tiempo, dificultad, tipo);
    document.getElementById("contenido").append(contenedor);
  });
}

function crearRecetasPorTipoNovegetarianas(recetasNo){
  document.getElementById("contenido").innerHTML = "";
  recetasNo.map((recetaNoVegetariana) => {
    let contenedor = document.createElement("div");
    let nombre = document.createElement("p");
    let ingredientes = document.createElement("ul");
    let tiempo = document.createElement("p");
    let dificultad = document.createElement("p");
    let tipo = document.createElement("p");
    nombre.textContent = "Nombre: " + recetaNoVegetariana.nombre;
    ingredientes.textContent =
      "Ingredientes :" + recetaNoVegetariana.ingredientes;
    tiempo.textContent =
      "Tiempo preparacion: " + recetaNoVegetariana.tiempoPreparacion;
    dificultad.textContent = "Dificultad: " + recetaNoVegetariana.dificultad;
    tipo.textContent = "Tipo:" + recetaNoVegetariana.tipoComida;
    contenedor.append(nombre, ingredientes, tiempo, dificultad, tipo);
    document.getElementById("contenido").append(contenedor);
  });
}

export function filtrarPorDificultad(value) {
  let recetas = recetasVegetarianas.filter(
    (recetaVegetariana) => recetaVegetariana.dificultad == value
  );
  crearRecetasPorDificultad(recetas)
  let recetasNo = recetasNoVegetarianas.filter(
    (recetaNoVegetariana) => recetaNoVegetariana.dificultad == value
  );
  crearRecetasPorDificultadNovegetarianas(recetasNo)
}

function crearRecetasPorDificultad(recetas){
  document.getElementById("contenido").innerHTML = "";
  recetas.map((recetaVegetariana) => {
    let contenedor = document.createElement("div");
    let nombre = document.createElement("p");
    let ingredientes = document.createElement("ul");
    let tiempo = document.createElement("p");
    let dificultad = document.createElement("p");
    let tipo = document.createElement("p");
    nombre.textContent = "Nombre: " + recetaVegetariana.nombre;
    ingredientes.textContent =
      "Ingredientes :" + recetaVegetariana.ingredientes;
    tiempo.textContent =
      "Tiempo preparacion: " + recetaVegetariana.tiempoPreparacion;
    dificultad.textContent = "Dificultad: " + recetaVegetariana.dificultad;
    tipo.textContent = "Tipo:" + recetaVegetariana.tipoComida;
    contenedor.append(nombre, ingredientes, tiempo, dificultad, tipo);
    document.getElementById("contenido").append(contenedor);
  });
}

function crearRecetasPorDificultadNovegetarianas(recetasNo){
  document.getElementById("contenido").innerHTML = "";
  recetasNo.map((recetaNoVegetariana) => {
    let contenedor = document.createElement("div");
    let nombre = document.createElement("p");
    let ingredientes = document.createElement("ul");
    let tiempo = document.createElement("p");
    let dificultad = document.createElement("p");
    let tipo = document.createElement("p");
    nombre.textContent = "Nombre: " + recetaNoVegetariana.nombre;
    ingredientes.textContent =
      "Ingredientes :" + recetaNoVegetariana.ingredientes;
    tiempo.textContent =
      "Tiempo preparacion: " + recetaNoVegetariana.tiempoPreparacion;
    dificultad.textContent = "Dificultad: " + recetaNoVegetariana.dificultad;
    tipo.textContent = "Tipo:" + recetaNoVegetariana.tipoComida;
    contenedor.append(nombre, ingredientes, tiempo, dificultad, tipo);
    document.getElementById("contenido").append(contenedor);
  });
}
