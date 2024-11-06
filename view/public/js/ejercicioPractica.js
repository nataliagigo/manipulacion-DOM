function destinoViaje(destinoIng) {
  let precioBase;
  if (destinoIng == "1") {
    precioBase = 300000;
  } else if (destinoIng == "2") {
    precioBase = 800000;
  } else {
    console.log("opcion incorrecta");
  }
  return precioBase;
}


function tipoTransporte(destino, transporteIng) {
  let costoAdicional;
  if (destino == "300000") {
    switch (transporteIng) {
      case "1":
        costoAdicional = 200000;
        break;
      case "2":
        costoAdicional = 100000;
        break;
      case "3":
        costoAdicional = 150000;
      default:
        console.log("opcion no correcta");
    }
  } else if (destino == "800000") {
    switch (transporteIng) {
      case "1":
        costoAdicional = 500000;
        break;
      case "2":
        costoAdicional = 300000;
        break;
      default:
        console.log("opcion no correcta");
    }
  }
  return costoAdicional;
}

function recargo(destino, transporteIng) {
  let valorRecargo;
  if (destino == "800000" && transporteIng == "2") {
    valorRecargo = 1300000 * 0.1;
  } else {
    valorRecargo = 0;
  }
  return valorRecargo;
}

function costoTotalViaje(destino, transporte, recargo) {
  let costoTotal = destino + transporte + recargo;
  return costoTotal;
}


  let destinoIng = Number(prompt(
    "Ingrese el destino (1. destino Nacional - 2. Destino Internacional)"
  )) ;

  let transporteIng = Number(prompt(
    "Ingrese el transporte deseado 1. Avion - 2. Barco - 3. Tren"
  ))
let destino = destinoViaje(destinoIng);
console.log(destino);

let transporte = tipoTransporte(destinoViaje(destinoIng));
console.log(transporte);

let precioRecargo = recargo(destinoViaje(destinoIng), transporteIng);
console.log(precioRecargo);

let costoTotal = costoTotalViaje(
  destinoViaje(destinoIng),
  tipoTransporte(destinoViaje(destinoIng)),
  recargo(destinoViaje(destinoIng), tipoTransporte(destinoViaje(destinoIng)))
);
console.log(costoTotal);

console.log(
    " El precio base del viaje fue: " +
    destino + 
    "\n El costo adicional por el tipo de tranport fue: " +
    transporte +
    "\n El recargo fue: " +
    precioRecargo +
    "\n El valor total del viaje es: " +
    costoTotal
);
  