class Person{
    constructor(firstName, lastName, age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
}

// get button id and div id
let btn = document.getElementById('btn');

let result = document.getElementById('result');

function toShow(){
    //get values of user's input
    let fn = document.getElementById('first_name').value;
    let ln = document.getElementById('last_name').value;
    let ag = document.getElementById('age').value;

    const user = new Person(fn, ln, ag);

    if(ag <= 1){
        result.innerHTML =`Hello, ${user.firstName} ${user.lastName}! You are ${user.age} year old.`
    }else{
        result.innerHTML =`Hello, ${user._firstName} ${user.lastName}! You are ${user.age} years old.`
    }   
}

btn.addEventListener('click', toShow);