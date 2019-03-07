export default class Employee{
    constructor(nombre,email,birthday){
        this._name=nombre;
        this._email=email;
        this._birthday=birthday;
    }

    get name(){
        return this._name
    }
    get email(){
        return this._email
    }
    get birthday(){
        return this._birthday
    }
    getBirthdayAsString(){
        let date = (this._birthday.getDate())+'-'+(this._birthday.getMonth())+'-'+this._birthday.getFullYear()  
        return date
    }
    getAge(){
        let oneDay = 24*60*60*1000
        let oneYear = oneDay * 365
        let differenceMs = new Date()-this._birthday
        let age = Math.trunc(differenceMs/oneYear)
        return age
    }
}
