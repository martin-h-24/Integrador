const laCantidad = document.getElementById("laCantidad");
// const catEstudiante = document.getElementById("catEstudiante");
// const catTrainee = document.getElementById("catTrainee");
// const catJunior = document.getElementById("catJunior");
const categoria = document.getElementById("categoria");
const totalCompras = document.getElementById("totalCompras");
const deNuevo = document.getElementById("deNuevo");
const resumenBtn = document.getElementById("resumenBtn");

const precioEstudiante = 200 - (200 * 0.8);
const precioTrainee = 200 - (200 * 0.5);
const precioJunior = 200 - (200 * 0.15);

let cantidad = 0;
let tipoCategoria = "estudiante";
let precio = 0;

categoria.onchange = function() {
    tipoCategoria = categoria.value;
}

laCantidad.onchange = function() {
    cantidad = laCantidad.value;
}

resumenBtn.onclick = function() {
    if(tipoCategoria == "estudiante") {
        precio = calcularPrecioEstudiante(cantidad);
    } else if(tipoCategoria == "trainee") {
        precio = calcularPrecioTrainee(cantidad);
    } else if(tipoCategoria == "junior") {
        precio = calcularPrecioJunior(cantidad);
    }
    totalCompras.innerHTML = "Total a Pagar: $" + precio;
}

function calcularPrecioEstudiante(cantidad) {
    return precioEstudiante * cantidad;
}

function calcularPrecioTrainee(cantidad) {
    return precioTrainee * cantidad;
}

function calcularPrecioJunior(cantidad) {
    return precioJunior * cantidad;
}

