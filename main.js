import Auto from "./Auto.js";

let auto1 = new Auto("Ford", 200, "Rojo", 100);
auto1.mostrarEstado();
auto1.encender();
auto1.avanzar(50, 2);
auto1.apagar();
auto1.avanzar(20,2);

let auto2 = new Auto("Nissan", 2018, "blanco");
auto2.encender();
let auto3 = new Auto("vw", 2010);
auto3.encender();

console.log(`Color ${auto1.color}`); //Lectura
console.log(`Color ${auto2.color}`); //Lectura
auto1.color="Amarillo"; //Escritura
auto2.color="Azul";  //Escritura