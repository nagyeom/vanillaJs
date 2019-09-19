const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const CURRENT_LS = "userName";
const SHOWING_CN = "showing";

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    sayHello(currentValue);
    saveName(currentValue);
}

function sayHello(name){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello! ${name}`;

}

function askName(){
    form.addEventListener("submit", handleSubmit);
}

function saveName(name){
    localStorage.setItem(CURRENT_LS, name);
}

function loadName(){
    const currentName = localStorage.getItem(CURRENT_LS);
    if (currentName){
        sayHello(currentName);
    }else{
        form.classList.add(SHOWING_CN);
        greeting.classList.remove(SHOWING_CN);
        askName();
    }
}

function init(){
    loadName();
}

init();