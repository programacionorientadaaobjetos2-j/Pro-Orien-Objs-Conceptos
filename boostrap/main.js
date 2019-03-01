import Empleado from "./Empleado.js"

let btn = document.querySelector('#btnAdd')
let inputNombre = document.querySelector('#name')
let inputCorreo = document.querySelector('#email')
let inputNacimiento = document.querySelector('#birthday')
btn.addEventListener('click', agregar)

let empleados
function agregar(){
    let nombre = inputNombre.value
    let email = inputCorreo.value
    let nacimiento = inputNacimiento.value
    
    empleados = new Empleado(nombre,email,nacimiento)
    console.log(empleados)
    Array();
}

var baseDatos = []
function Array(){
    baseDatos.push(empleados)
    empleados.getAge(new Date)
    document.querySelector('#agenda').innerHTML += '<tbody><td>'+ empleados._name +'</td><td>'+ empleados._email +'</td><td>'+ empleados._birthday +'</td></tbody>'
}