// script.js

var contador = 0;
  var botonContador = document.getElementById("boton-contador");
  var spanContador = document.getElementById("contador");
  
  botonContador.addEventListener("click", incrementarContador);
  
  function incrementarContador() {
    contador++;
    spanContador.textContent = contador.toString();
  }

  function verificarContrasena() {
    var contrasenaIngresada = document.getElementById("contrasena").value;
    var mensajeResultado = document.getElementById("mensaje-resultado");

    if (contrasenaIngresada === "contraseña123") {
      mensajeResultado.textContent = "¡Contraseña correcta! Acceso concedido.";
      mensajeResultado.style.color = "green";
    } else {
      mensajeResultado.textContent = "Contraseña incorrecta. Acceso denegado.";
      mensajeResultado.style.color = "red";
    }
  }

function showAlert() {
    alert("Hola");
  }
  
  var button = document.getElementById("mi-boton");
  button.addEventListener("click", showAlert);

  function mostrarMensaje() {
    var nombre = document.getElementById("nombre").value;
    var mensaje = "¡Bienvenido, " + nombre + "!";

    document.getElementById("mensaje-bienvenida").textContent = mensaje;
  }

  function cambiarColorFondo() {
    var colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
    var indiceAleatorio = Math.floor(Math.random() * colores.length);
    var colorFondo = colores[indiceAleatorio];
  
    document.body.style.backgroundColor = colorFondo;
  }

  function generarTabla() {
    var numero = parseInt(document.getElementById("numero").value);
    var tabla = document.getElementById("tabla-multiplicar");

    // Limpiar tabla previa
    tabla.innerHTML = "";

    // Generar filas de la tabla
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;

      // Crear elementos de la tabla (fila y celdas)
      var fila = document.createElement("tr");
      var celdaNumero = document.createElement("td");
      var celdaMultiplicador = document.createElement("td");
      var celdaResultado = document.createElement("td");

      // Asignar valores a las celdas
      celdaNumero.textContent = numero;
      celdaMultiplicador.textContent = i;
      celdaResultado.textContent = resultado;

      // Agregar las celdas a la fila
      fila.appendChild(celdaNumero);
      fila.appendChild(celdaMultiplicador);
      fila.appendChild(celdaResultado);

      // Agregar la fila a la tabla
      tabla.appendChild(fila);
    }
  }

  