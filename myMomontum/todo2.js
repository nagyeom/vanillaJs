const toDoForm = document.querySelector(".js-toDoForm2");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList2");

const TODO_LS = 'toDos2';

let toDos = [];

function removeToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //

    const cleanToDo = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDo;
    saveToDo();
}

function listUpToDo(toDo){
    const li = document.createElement("li");
    const btnDel = document.createElement("button");
    const span = document.createElement("span");

    const newId = toDos.length + 1;
    
    span.innerText = toDo;
    btnDel.innerText = "X";
    btnDel.addEventListener("click",removeToDo);

    li.appendChild(btnDel);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        id : newId,
        toDo : toDo
    };
    toDos.push(toDoObj);
}

function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));

}

function handleToDo(event){
    event.preventDefault();
    const currentToDo = toDoInput.value;
    listUpToDo(currentToDo);
    saveToDo();
}

function loadToDo(){
    const toDosLS = JSON.parse(localStorage.getItem(TODO_LS));
    if (toDosLS){
        toDosLS.forEach(function(toDo){
            listUpToDo(toDo.toDo);
        });
    }
    //toDo의 text부만 넘겨서 forEach-listUpToDo 시키기 때문에 새 페이지가 로딩 될때마다 id값이 순서대로 갱신된다
    //listUpToDo에서 id 값을 새로 정리해서 넣어주기 때문
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleToDo); // submit은 form에서 일어난다!!!!!!!!!!!
}

init();