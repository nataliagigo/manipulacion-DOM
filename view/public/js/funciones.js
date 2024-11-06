//FUNCION DECLARATIVA
function iniciarSesion() {
    let usuario = document.querySelector("#usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    if (usuario == "admin" && contrasena == "12345") {
      console.log("Bienvenido");
    } else {
      console.log("Error de credenciales");
    }
  }
  
  // //FUNCION DE EXPRESIÓN
  // let inciarSesion = function () {
  //     let usuario = document.querySelector("#usuario")
  //     let contrasena = document.getElementById("contrasena")
  //     console.log('iniciar sesion');
  // }
  
  // iniciarSesion()
  
  
  
  //Funciones Flecha
  const funcionFlecha = () => {
    console.log('esto es una funcion flecha');
  }
  
  funcionFlecha()
  
  
  function calcularHorasExtras(cantidadHoras) {
    if (cantidadHoras > 92) {
      let horasExtras = cantidadHoras - 92;
      return horasExtras;
    }
  }
  
  function calcularValorHorasExtras(cantidadHoras, valorHora) {
    let valorHorasExtra = valorHora * 1.25;
    return valorHorasExtra * cantidadHoras;
  }
  
  function calcularSalarioBruto(cantidadHoras, valorHora) {
    let horasExtras = cantidadHoras - 92
    let salarioBruto = (cantidadHoras - horasExtras) * valorHora
    return salarioBruto;
  }
  
  function calcularSalarioNeto(salarioBruto, deducciones, valorHorasExtra) {
    let salarioNeto = salarioBruto - deducciones + valorHorasExtra;
    return salarioNeto;
  }
  
  function calcularDeducciones(salarioBruto) {
    let deducciones = salarioBruto * 0.08;
    return deducciones;
  }
  
  let cantidadHoras = 100;
  let valorHora = 10000;
  console.log("las horas extras fueron: " + calcularHorasExtras(cantidadHoras));
  console.log(
    "el valor a pagar por hora extra es : " +
      calcularValorHorasExtras(calcularHorasExtras(cantidadHoras), valorHora)
  );
  console.log(
    "el salrio bruto es: " +
      calcularSalarioBruto(
        cantidadHoras,
        valorHora
      )
  );
  console.log(
    "las deducciones son: " +
      calcularDeducciones(
        calcularSalarioBruto(
          cantidadHoras,
          valorHora
        )
      )
  );
  console.log(
    "El salario neto es: " +
      calcularSalarioNeto(
        calcularSalarioBruto(
          cantidadHoras,
          valorHora
        ),
        calcularDeducciones(calcularSalarioBruto(cantidadHoras, valorHora)),
        calcularValorHorasExtras(calcularHorasExtras(cantidadHoras), valorHora)
      )
  );
  