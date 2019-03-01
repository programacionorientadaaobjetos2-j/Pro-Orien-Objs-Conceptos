export default class Empleado{
    constructor(nombre,email,birthday){
        this._name=nombre;
        this._email=email;
        this._birthday=new Date(birthday);
    }
    
    getAge(){
        return (Math.trunc((new Date - this._birthday.getTime())/(86400000 * 365.25)))
    }
}
