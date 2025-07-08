//En el html no existe ningun id form, solo se encuentra la clase formulario
//Se cambia #form por .fomulario
var formulario = document.querySelector(".formulario")

formulario.onsubmit = function (e) {
  //Se debe usar e.preventDefault() en lugar de e.prevent()
  //para evitar que se recargue la pagina al enviar el formulario
  //Se cambia e.prevent() por e.preventDefault()
  e.preventDefault();

  var n = formulario.elements[0]
  //se cambia e por ed ya que e es un evento 
  var ed = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = ed.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  //Se agrega un else para quitar el color rojo que se pone para indicar el error cuando se haya corregido el error
  if (nombre.length === 0) {
    n.classList.add("error")
  } else {
    n.classList.remove("error")

  }
  //Se agrega un else para quitar el color rojo que se pone para indicar el error cuando se haya corregido el error
  if (edad < 18 || edad > 120) {
    ed.classList.add("error")
  } else {
    ed.classList.remove("error")
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

//Se comenta las siguiente lineas de código que crean un boton borrar global, es decir que sale siempre aún si no hay invitados
/*
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);
*/

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  //lista-de-invitados no se encuentra como id en el HTML, se agrega como id
  //al div que se ecuentra en el HTML que tiene <h2>Lista de invitados</h2>
  var lista = document.getElementById("lista-de-invitados")


  var elementoLista = document.createElement("div")
  //classList.added no es un metodo de classList, se cambia por classList.add
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)
  //Se comenta el siguiente elemento debido a que se encuentra duplicado y se visualiza dos veces el nombre del invitado
  /*
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  */

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  //Se modifica para no tener botones con el mismo id
  botonBorrar.classList.add("boton-borrar");
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);
  
  botonBorrar.onclick = function () {
    //this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}