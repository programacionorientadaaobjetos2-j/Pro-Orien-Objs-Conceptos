export default class Empleado{
    constructor(nombre,email,birthday){
        this._name=nombre;
        this._email=email;
        this._birthday=birthday;
    }
    
    getAge(fechaActual){
    let edad = fechaActual - this._birthday
    let age = Math.trunc(edad/(1000*60*60*24))
    console.log(`El empleado tiene ${age}`)        
    }
}
