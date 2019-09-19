const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];


function deleteToDo(event){
    //
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    //******Array.filter() : Array의 모든 요소에 filter 안의 함수를 실행 시켜 그 결과들을 array 형식으로 반환 하게 해준다.  ********/
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

}

function saveToDos(){
    //3.localStorage에 obj-list 저장
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    //2.toDo(text)  ul-li 표시 후 Obj형태로 만들어 list 저장 
    const li = document.createElement("li");

    const delBtn = document.createElement("button");
    delBtn.innerText= "X";
    delBtn.addEventListener("click", deleteToDo);

    const span = document.createElement("span");
    span.innerText = text;

    const newId = toDos.length + 1;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    //1. input  입력 데이터 처리
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    //0&4. localStorage에 toDos가 있는지 확인하고 있으면 가져와서 ul-li로 뿌리기 없으면 동작 X
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();